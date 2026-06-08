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
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const CustomRenderLogInFunction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        switch (error.status) {
          case 401:
            toast.error("Incorrect email password.");
            break;

          case 404:
            toast.error("No account found with this email.", {
              action: {
                label: "Register",
                onclick: () => router.push("/register"),
              },
            });
            break;

          case 429:
            toast.error("Too many attempts. Please wait a moment");
            break;

          case 500:
          case 502:
          case 503:
            toast.error("Server error. Please try again later.");
            break;

          default:
            // Use the server's own message if available, fallback to generic
            toast.error(error.message ?? "Login failed. Please try again.");
        }
        return;
      }

      toast.success("Login successful! Welcome back");
      router.push("/");
    } catch (err) {
      toast.error("Connection error. Check your internet and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-amber-200">
      <Form
        className="flex w-96 flex-col gap-4"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <h1 className=" text-2xl font-bold text-center">Login Account</h1>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
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
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

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
          <Button type="submit" isDisabled = {isLoading}>
            <Check />
            Login
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <Button className="w-full" variant="tertiary"
        onPress={async () => {
            await authClient.signIn.Social({
                provider: "google",
                callbackURL: "/"
            })
        }}
        >
          <Icon icon="devicon:google" />
        Login with Google
        </Button>
        <div className=" text-center">
          If you do not have an account{" "}
          <Link className="text-blue-800" href="/register">
            register now
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

export default CustomRenderLogInFunction;
