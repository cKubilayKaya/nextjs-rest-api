import { useRouter } from "next/router";
import React, { useState } from "react";

export default function register() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
    if (data.success) {
      console.log("anasayfaya git");
      router.push("/");
    } else {
      console.log("hata");
    }
  };

  return (
    <form className="register-form" onSubmit={register}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <input type="submit" value="register" />
    </form>
  );
}
