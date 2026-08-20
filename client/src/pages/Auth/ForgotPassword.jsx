import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import Button from "../../components/ui/Button";

function ForgotPassword() {
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to receive a reset link."
    >
      <form>

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email "
        />

        <Button className="w-full">
          Send Reset Link
        </Button>

      </form>

    </AuthLayout>
  );
}

export default ForgotPassword;