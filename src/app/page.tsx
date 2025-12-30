// src/app/page.tsx
import LoginForm from '../features/auth/components/LoginForm';

export default function HomePage() {
  // ❌ Do NOT call useAuth() here! This is a Server Component.
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm /> {/* Client Component */}
    </div>
  );
}
