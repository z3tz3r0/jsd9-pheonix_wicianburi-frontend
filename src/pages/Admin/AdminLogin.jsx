import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert } from "@mui/material"
import React, { useState } from 'react'
import { useAdminAuth } from "./AdminContext"
import api from "./services/api"

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const { loginAdmin, loading: contextLoading } = useAdminAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await api.post('/admin/auth/login', formData);
      if (response.data?.admin) {
        loginAdmin(response.data?.admin);
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error("Admin login error: ", error);
      setError(error.response?.data?.message || "Login failed. Invalid credential or server error.");
    }
  }

  return (
    <div className="flex items-center justify-center w-full p-6 bg-black min-h-svh md:p-10 dark">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Alert severity="info" sx={{ my: 2, width: '100%' }}>
            <p>For development only: </p>
            <p>Email: <strong>admin@example.com</strong></p>
            <p>Password: <strong>password123</strong></p>
          </Alert>
          {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="m@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      minLength={6}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {contextLoading ? <CircularProgress size={24} /> : 'Login'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin