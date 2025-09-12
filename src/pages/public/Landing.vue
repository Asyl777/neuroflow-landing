<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const handleFormSubmit = (event: Event) => {
  event.preventDefault()
  console.log('Форма отправлена')
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-1">
      <!-- Hero Section -->
      <section class="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div class="container px-4 md:px-6 mx-auto">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-6 max-w-4xl">
              <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                NeuroFlow: Веб-разработка и CRM-интеграции для вашего бизнеса
              </h1>
              <p class="mx-auto max-w-[700px] text-gray-200 text-lg md:text-xl leading-relaxed">
                От лендингов и корпоративных сайтов до сложных интеграций с CRM. Превращаем ваши идеи в эффективные бизнес-инструменты.
              </p>
            </div>
            <div class="flex flex-col gap-4 min-[400px]:flex-row pt-6">
              <a href="#contact">
                <Button size="lg" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                  Рассчитать стоимость проекта
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg">
                  Смотреть примеры работ
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- Services Section -->
      <section id="services" class="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div class="container px-4 md:px-6 mx-auto">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-4">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Наши услуги</h2>
              <p class="max-w-[900px] text-gray-600 md:text-xl leading-relaxed dark:text-gray-300">
                Мы предлагаем полный спектр услуг по разработке, чтобы помочь вашему бизнесу расти.
              </p>
            </div>
          </div>
          <div class="mx-auto grid max-w-6xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
            <Card class="h-full hover:shadow-lg transition-shadow">
              <CardHeader class="pb-4">
                <div class="flex items-center space-x-4">
                  <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <CardTitle class="text-xl">Веб-разработка</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Создаем быстрые, адаптивные сайты и лендинги, которые продают. Современный дизайн и безупречный код.
                </p>
              </CardContent>
            </Card>
            
            <Card class="h-full hover:shadow-lg transition-shadow">
              <CardHeader class="pb-4">
                <div class="flex items-center space-x-4">
                  <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <CardTitle class="text-xl">Интеграция с CRM</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Интегрируем ваш сайт с популярными CRM-системами (amoCRM, Bitrix24 и др.) для автоматизации воронок продаж и улучшения клиентского сервиса.
                </p>
              </CardContent>
            </Card>
            
            <Card class="h-full hover:shadow-lg transition-shadow">
              <CardHeader class="pb-4">
                <div class="flex items-center space-x-4">
                  <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                    </svg>
                  </div>
                  <CardTitle class="text-xl">Разработка E-commerce</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Создаем интернет-магазины с интеграцией платежных систем, управлением каталогом товаров и личным кабинетом покупателя.
                </p>
              </CardContent>
            </Card>
            
            <Card class="h-full hover:shadow-lg transition-shadow">
              <CardHeader class="pb-4">
                <div class="flex items-center space-x-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <CardTitle class="text-xl">Автоматизация бизнес-процессов</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Разрабатываем кастомные решения для автоматизации рутинных задач, оптимизации внутренних процессов и повышения эффективности команды.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <!-- Why Choose Us Section -->
      <section id="why-us" class="w-full py-16 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6 mx-auto">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-4">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Почему мы?</h2>
              <p class="mx-auto max-w-[700px] text-gray-600 md:text-xl leading-relaxed dark:text-gray-300">
                Наши преимущества, которые помогут вашему бизнесу достичь новых высот.
              </p>
            </div>
            <div class="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-3">
              <div class="flex flex-col items-center space-y-4 text-center">
                <div class="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold">Фокус на результат</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Мы не просто пишем код, мы решаем ваши бизнес-задачи.
                  </p>
                </div>
              </div>
              
              <div class="flex flex-col items-center space-y-4 text-center">
                <div class="p-4 bg-green-100 dark:bg-green-900 rounded-full">
                  <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold">Современный стек</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Используем передовые технологии для достижения максимальной производительности.
                  </p>
                </div>
              </div>
              
              <div class="flex flex-col items-center space-y-4 text-center">
                <div class="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold">Глубокая экспертиза</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Наша команда обладает опытом в разработке сложных веб-приложений и интеграций.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Portfolio Section -->
      <section id="portfolio" class="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div class="container px-4 md:px-6 mx-auto">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-4">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Примеры работ</h2>
              <p class="max-w-[900px] text-gray-600 md:text-xl leading-relaxed dark:text-gray-300">
                Взгляните на некоторые из наших последних проектов.
              </p>
            </div>
          </div>
          <div class="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-3">
            <Card class="overflow-hidden hover:shadow-xl transition-shadow">
              <div class="h-48 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <div class="text-white text-2xl font-bold">AuraMarket</div>
              </div>
              <CardHeader class="pb-4">
                <CardTitle class="text-xl">Разработка интернет-магазина 'AuraMarket'</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Разработали e-commerce платформу с каталогом товаров, онлайн-оплатой и личным кабинетом. Рост конверсии на 40%.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">E-commerce</span>
                  <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">E-commerce</span>
                </div>
              </CardContent>
            </Card>
            
            <Card class="overflow-hidden hover:shadow-xl transition-shadow">
              <div class="h-48 bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center">
                <div class="text-white text-2xl font-bold">LogiTrack</div>
              </div>
              <CardHeader class="pb-4">
                <CardTitle class="text-xl">Веб-платформа для логистической компании 'LogiTrack'</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Создали корпоративный сайт с личным кабинетом для отслеживания грузов и управления заказами в реальном времени.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-full text-sm">Web Development</span>
                  <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Vue.js</span>
                </div>
              </CardContent>
            </Card>
            
            <Card class="overflow-hidden hover:shadow-xl transition-shadow">
              <div class="h-48 bg-gradient-to-br from-rose-500 to-fuchsia-500 flex items-center justify-center">
                <div class="text-white text-2xl font-bold">FinPredict</div>
              </div>
              <CardHeader class="pb-4">
                <CardTitle class="text-xl">CRM-интеграция для 'FinPredict'</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Интегрировали сайт с CRM для анализа клиентских данных и автоматизации маркетинговых кампаний, что помогло повысить продажи.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 rounded-full text-sm">CRM</span>
                  <span class="px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-800 dark:text-fuchsia-200 rounded-full text-sm">FinTech</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <!-- Call to Action Section -->
      <section id="contact" class="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div class="container px-4 md:px-6 mx-auto">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-4">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Готовы обсудить ваш проект?
              </h2>
              <p class="mx-auto max-w-[700px] text-gray-100 md:text-xl leading-relaxed">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут для бесплатной консультации.
              </p>
            </div>
            <div class="w-full max-w-md mt-8">
              <Card class="shadow-2xl">
                <CardHeader class="pb-4">
                  <CardTitle class="text-center text-xl">Оставить заявку</CardTitle>
                </CardHeader>
                <CardContent>
                  <form @submit="handleFormSubmit" class="space-y-4">
                    <div class="space-y-2">
                      <Label for="name">Имя *</Label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя" 
                        required 
                        class="bg-white dark:bg-gray-800"
                      />
                    </div>
                    <div class="space-y-2">
                      <Label for="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+7 (XXX) XXX-XX-XX" 
                        required 
                        class="bg-white dark:bg-gray-800"
                      />
                    </div>
                    <div class="space-y-2">
                      <Label for="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="example@email.com" 
                        required 
                        class="bg-white dark:bg-gray-800"
                      />
                    </div>
                    <div class="space-y-2">
                      <Label for="message">Опишите ваш проект (опционально)</Label>
                      <textarea 
                        id="message"
                        rows="3"
                        placeholder="Кратко опишите, что вы хотите реализовать..."
                        class="w-full px-3 py-2 border border-input bg-white dark:bg-gray-800 rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      ></textarea>
                    </div>
                    <Button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    <!-- Company Details Section -->
      <section id="company-details" class="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div class="container px-4 md:px-6 mx-auto">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-4">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Сведения о компании</h2>
            </div>
          </div>
          <div class="mx-auto max-w-4xl py-12 text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
            <div class="space-y-2">
              <h3 class="text-xl font-semibold">Зарегистрированное название компании</h3>
              <p>ИП Шотаев Асылхан Муратович 021116550105 NeuroFlow</p>
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold">Адрес</h3>
              <p>город Семей, массив Восточный Правый ~ №3905<br>Семей, область Абай 9700<br>Казахстан</p>
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold">Телефон компании</h3>
              <p>+77064076625</p>
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold">Сайт</h3>
              <p><a href="https://neuroflow.kz/" class="text-purple-400 hover:underline">https://neuroflow.kz/</a></p>
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold">Номер налогоплательщика</h3>
              <p>021116550105</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="w-full border-t bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto py-6 px-4 md:px-6">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <p class="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © 2025 NeuroFlow. Все права защищены.
          </p>
          <nav class="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <a href="/privacy" class="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/agreement" class="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Пользовательское соглашение
            </a>
          </nav>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center md:text-left text-sm text-gray-500 dark:text-gray-400">
          <p><strong>Адрес:</strong> ОБЛАСТЬ АБАЙ, СЕМЕЙ Г.А., Г.СЕМЕЙ, МАССИВ Восточный Правый, 3905, 071400</p>
          <p><strong>Телефон:</strong> +77064076625</p>
        </div>
      </div>
    </footer>
  </div>
</template>
