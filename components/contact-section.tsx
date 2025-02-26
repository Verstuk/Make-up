"use client"

import type React from "react"
import axios from 'axios'
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const TELEGRAM_BOT_TOKEN = '7645072541:AAG2jeHlXaKwcYEEA_HVtQPcMvwCdlr3X5c';
  const CHAT_ID = '-4735048861'; // Или ID чата, если это не публичная группа

  const sendMessageToTelegram = async (message: string) => {
    if (!message.trim()) {
      console.error('Сообщение пустое, отправка невозможна.');
      return;
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: CHAT_ID,
        text: message,
      });
      console.log('Сообщение успешно отправлено в Telegram');
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Логируем данные формы для проверки
    console.log("Form data:", formData);

    // Формируем сообщение для отправки в Telegram
    const message = `Новое сообщение:\nИмя: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`;

    // Отправляем сообщение в Telegram
    sendMessageToTelegram(message);

    // Показываем уведомление пользователю
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");

    // Очищаем данные формы
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-primary/5 cognac-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-40 h-40 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-10 left-1/3 w-56 h-56 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-playfair italic">Напишите мне</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Связаться со мной</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Есть вопросы или хотите записаться на услугу? Заполните форму ниже, и я свяжусь с вами в ближайшее время.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div ref={ref} className={`max-w-md mx-auto ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 font-playfair text-center">Отправить сообщение</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 font-playfair">
                  Имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  required
                  className="border-primary/20 focus-visible:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 font-playfair">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Введите ваш email"
                  required
                  className="border-primary/20 focus-visible:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 font-playfair">
                  Телефон
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Введите ваш телефон"
                  required
                  className="border-primary/20 focus-visible:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 font-playfair">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Введите ваше сообщение"
                  rows={5}
                  required
                  className="border-primary/20 focus-visible:ring-primary"
                />
              </div>

              <Button type="submit" className="w-full font-playfair cognac-glow">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
