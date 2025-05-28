import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BecomePartner() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // TODO: Add API call here
  };

  return (
    <section className="w-[86%] mx-auto bg-gray-50 py-12 px-4 md:px-8" aria-labelledby="partner-heading">
      <nav
        className="w-full max-w-5xl mb-6 text-left text-gray-600 text-base font-medium"
        aria-label="Breadcrumb"
      >
        <Link to="/" className="text-gray-500">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-purple-600 font-semibold" aria-current="page">Стать партнером</span>
      </nav>

      <header className="h-[376px] rounded-[20px] flex justify-center items-center bg-[#8168F0]" role="banner">
        <h1 className="text-white font-bold text-5xl text-center w-3/4 p-8">
          Увеличьте поток покупателей с нашим сервисом
        </h1>
      </header>

      <main className="mt-12">
        <h2 id="partner-heading" className="font-bold text-3xl text-[#434343] mb-8">
          Отправить заявку
        </h2>

        <section className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full lg:w-1/2" aria-label="Форма заявки">
            <TextField
              label="ФИО"
              variant="outlined"
              fullWidth
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Телефон"
              variant="outlined"
              fullWidth
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <TextField
              label="Об вашей аптеке"
              multiline
              rows={4}
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#8168F0", '&:hover': { backgroundColor: "#6e54d3" } }}
            >
              Отправить
            </Button>
          </form>

          {/* Contact Info */}
          <article className="w-full lg:w-1/2 flex flex-col gap-4 text-gray-700">
            <h3 className="text-xl font-semibold">Режим работы</h3>
            <p>Ежедневно с 9:00 до 20:00</p>

            <h3 className="text-xl font-semibold mt-4">Телефон</h3>
            <p>(+992) 900-22-33-44</p>

            <h3 className="text-xl font-semibold mt-4">E-mail</h3>
            <a href="mailto:help@medmarket.tj" className="text-blue-600 hover:underline">
              help@medmarket.tj
            </a>bbbbbb
          </article>
        </section>
      </main>
    </section>
  );
}
