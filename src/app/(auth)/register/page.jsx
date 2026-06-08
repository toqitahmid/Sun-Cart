"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const image = formData.get("imageUrl");
    const email = formData.get("email");
    const password = formData.get("password");

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        image,
        email,
        password,
      });

      if (error) {
        switch (error.status) {
          case 409:
            toast.error((t) => (
              <span>
                Email already exists.{" "}
                <button
                  onClick={() => {
                    router.push("/login");
                    toast.dismiss(t.id);
                  }}
                  style={{ textDecoration: "underline", fontWeight: 600 }}
                >
                  Login instead
                </button>
              </span>
            ));
            break;

          case 429:
            toast.error("Too many attempts. Please wait a moment.");
            break;

          case 500:
          case 502:
          case 503:
            toast.error("Server error. Please try again later.");
            break;

          default:
            toast.error(
              error.message ?? "Registration failed. Please try again.",
            );
        }
        return;
      }

      toast.success("Account created successfully!");
      router.push("/");
    } catch (err) {
      toast.error("Connection error. Check your internet and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-amber-200">
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold text-center">Create Account</h1>

        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Muhammad" />
          <FieldError />
        </TextField>

        <TextField name="imageUrl" type="url">
          <Label>Image URL</Label>
          <Input placeholder="https://example.com/image.jpg" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) =>
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ? "Please enter a valid email address"
              : null
          }
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8)
              return "Password must be at least 8 characters";
            if (!/[A-Z]/.test(value))
              return "Password must contain at least one uppercase letter";
            if (!/[0-9]/.test(value))
              return "Password must contain at least one number";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" isDisabled={isLoading}>
            <Check />
            {isLoading ? "Creating..." : "Register"}
          </Button>
          <Button type="reset" variant="secondary" isDisabled={isLoading}>
            Reset
          </Button>
        </div>

        <Button
          className="w-full"
          variant="tertiary"
          isDisabled={isLoading}
          onPress={async () => {
            await authClient.signIn.social({
              provider: "google",
              callbackURL: "/",
            });
          }}
        >
          <Icon icon="devicon:google" />
          Login with Google
        </Button>

        <div className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline">
            Login
          </Link>
          {" | "}
          <Link className="text-blue-800" href="/">
            Home
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
