"use client";

import { signIn, authClient } from "@crm/auth/client";
import { Button } from "@crm/ui/components/button";
import { Input } from "@crm/ui/components/input";
import { Label } from "@crm/ui/components/label";
import { Spinner } from "@crm/ui/components/spinner";
import { useState } from "react";
import { toast } from "sonner";

type Mode = "sign-in" | "sign-up";

export function EmailSignIn() {
	const [mode, setMode] = useState<Mode>("sign-in");
	const [pending, setPending] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setPending(true);

		const form = new FormData(event.currentTarget);
		const email = String(form.get("email") ?? "").trim();
		const password = String(form.get("password") ?? "");
		const name = String(form.get("name") ?? "").trim() || email;
		const callbackURL = `${window.location.origin}/`;

		const result =
			mode === "sign-up"
				? await authClient.signUp.email({ email, password, name, callbackURL })
				: await signIn.email({ email, password, callbackURL });

		if (result.error) {
			toast.error(result.error.message ?? "Could not sign in.");
			setPending(false);
			return;
		}

		window.location.href = callbackURL;
	}

	const isSignUp = mode === "sign-up";

	return (
		<form className="grid gap-3" onSubmit={handleSubmit}>
			{isSignUp ? (
				<div className="grid gap-1.5">
					<Label htmlFor="name">Name</Label>
					<Input
						autoComplete="name"
						id="name"
						name="name"
						placeholder="Your name"
						type="text"
					/>
				</div>
			) : null}

			<div className="grid gap-1.5">
				<Label htmlFor="email">Email</Label>
				<Input
					autoComplete="email"
					id="email"
					name="email"
					placeholder="you@example.com"
					required
					type="email"
				/>
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="password">Password</Label>
				<Input
					autoComplete={isSignUp ? "new-password" : "current-password"}
					id="password"
					minLength={8}
					name="password"
					required
					type="password"
				/>
			</div>

			<Button className="w-full" disabled={pending} type="submit">
				{pending ? <Spinner data-icon="inline-start" /> : null}
				{isSignUp ? "Create account" : "Sign in"}
			</Button>

			<Button
				disabled={pending}
				onClick={() => setMode(isSignUp ? "sign-in" : "sign-up")}
				type="button"
				variant="ghost"
			>
				{isSignUp ? "Use an existing account" : "Create an account"}
			</Button>
		</form>
	);
}
