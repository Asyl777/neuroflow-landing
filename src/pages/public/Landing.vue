<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const handleFormSubmit = (event: Event) => {
  event.preventDefault()
  console.log('Форма отправлена')
}

const crmSystems = [
  { name: 'AmoCRM', color: '#339DC9' },
  { name: 'Bitrix24', color: '#00AEEF' },
  { name: 'MacDent', color: '#4CAF50' },
  { name: 'DentisPlus', color: '#7C4DFF' },
  { name: 'Ident', color: '#FF6B35' },
  { name: '1C', color: '#FFD700' },
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Мегаплан', color: '#4DB6AC' },
  { name: 'RetailCRM', color: '#E91E63' },
  { name: 'Zoho CRM', color: '#D32F2F' },
  { name: 'Pipedrive', color: '#21A366' },
]

// Parallax and scroll animations
const scrollY = ref(0)
const isVisible = ref<{ [key: string]: boolean }>({})

const handleScroll = () => {
  scrollY.value = window.scrollY

  // Check visibility of animated elements
  document.querySelectorAll('[data-animate]').forEach((el) => {
    const rect = el.getBoundingClientRect()
    const id = el.getAttribute('data-animate')
    if (id && rect.top < window.innerHeight * 0.85) {
      isVisible.value[id] = true
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-black">
    <!-- Floating Login Button -->
    <a
      href="https://app.neuroflow.kz"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed top-6 right-6 z-50 group"
    >
      <Button class="relative overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20">
        <div class="flex items-center relative z-10">
          <svg class="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
          </svg>
          <span class="font-medium">Войти</span>
        </div>
      </Button>
    </a>

    <main class="flex-1">
      <!-- Hero Section with Video Background -->
      <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Animated gradient background -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <!-- Animated mesh gradient -->
          <div class="absolute inset-0 opacity-30">
            <div class="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div class="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
          </div>

          <!-- Grid pattern overlay -->
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-40"></div>

          <!-- Floating particles -->
          <div class="particles">
            <div v-for="i in 20" :key="i" class="particle" :style="{ '--delay': `${i * 0.5}s`, '--x': `${Math.random() * 100}%`, '--duration': `${15 + Math.random() * 10}s` }"></div>
          </div>
        </div>

        <!-- Hero content -->
        <div class="container px-4 md:px-6 mx-auto relative z-10">
          <div class="flex flex-col items-center justify-center space-y-8 text-center">
            <!-- Badge -->
            <div
              class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm border border-white/10 animate-fade-in-down"
            >
              <span class="relative flex h-2 w-2 mr-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Разрабатываем сайты и интеграции для бизнеса
            </div>

            <!-- Main heading -->
            <div class="space-y-6 max-w-5xl">
              <h1 class="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white animate-fade-in-up">
                <span class="block">Создаём</span>
                <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
                  цифровые решения
                </span>
              </h1>
              <p class="mx-auto max-w-2xl text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up animation-delay-200">
                Лендинги, сайты и интеграции с CRM-системами, которые
                <span class="text-white font-semibold">увеличивают продажи</span> и
                <span class="text-white font-semibold">автоматизируют бизнес</span>
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col gap-4 sm:flex-row pt-4 animate-fade-in-up animation-delay-400">
              <a href="#contact">
                <Button size="lg" class="group relative bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20">
                  <span class="relative z-10 flex items-center">
                    Получить бесплатный аудит
                    <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </Button>
              </a>
              <a href="#crm-integrations">
                <Button variant="outline" size="lg" class="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm">
                  Смотреть интеграции
                </Button>
              </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8 pt-16 max-w-3xl w-full animate-fade-in-up animation-delay-600">
              <div class="text-center group">
                <div class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 transition-transform group-hover:scale-110">
                  <span class="counter">50</span>+
                </div>
                <div class="text-gray-400 text-sm md:text-base">Проектов</div>
              </div>
              <div class="text-center group">
                <div class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 transition-transform group-hover:scale-110">
                  <span class="counter">12</span>+
                </div>
                <div class="text-gray-400 text-sm md:text-base">CRM систем</div>
              </div>
              <div class="text-center group">
                <div class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 transition-transform group-hover:scale-110">
                  <span class="counter">98</span>%
                </div>
                <div class="text-gray-400 text-sm md:text-base">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll-down"></div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="w-full py-24 lg:py-32 relative overflow-hidden">
        <!-- Animated background -->
        <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div class="absolute inset-0">
          <!-- Glowing orbs -->
          <div class="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>
        <!-- Grid pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <!-- Top line -->
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div class="container px-4 md:px-6 mx-auto relative z-10">
          <div
            class="flex flex-col items-center justify-center space-y-4 text-center mb-20"
            data-animate="services-header"
            :class="isVisible['services-header'] ? 'animate-fade-in-up' : 'opacity-0'"
          >
            <div class="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              Услуги
            </div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Что мы делаем</h2>
            <p class="max-w-2xl text-gray-400 text-lg md:text-xl">
              Полный цикл разработки: от идеи до запуска
            </p>
          </div>

          <div class="grid gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
            <!-- Service Card 1 -->
            <div
              data-animate="service-1"
              :class="isVisible['service-1'] ? 'animate-fade-in-up' : 'opacity-0'"
              class="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Лендинги</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  Продающие одностраничники с высокой конверсией. Адаптивный дизайн и SEO-оптимизация.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Уникальный дизайн
                  </li>
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Мобильная версия
                  </li>
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Интеграция с CRM
                  </li>
                </ul>
              </div>
            </div>

            <!-- Service Card 2 -->
            <div
              data-animate="service-2"
              :class="isVisible['service-2'] ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'"
              class="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Корпоративные сайты</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  Многостраничные сайты для компаний с личными кабинетами и системами управления.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Админ-панель
                  </li>
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Личный кабинет
                  </li>
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Масштабируемость
                  </li>
                </ul>
              </div>
            </div>

            <!-- Service Card 3 -->
            <div
              data-animate="service-3"
              :class="isVisible['service-3'] ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'"
              class="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Интернет-магазины</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  E-commerce решения с онлайн-оплатой и автоматизацией заказов.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Онлайн-оплата
                  </li>
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Управление складом
                  </li>
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Интеграция с 1С
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CRM Integrations Section -->
      <section id="crm-integrations" class="w-full py-24 lg:py-32 relative overflow-hidden">
        <!-- Animated background -->
        <div class="absolute inset-0 bg-gradient-to-b from-black via-purple-950/50 to-black"></div>
        <div class="absolute inset-0">
          <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div class="container px-4 md:px-6 mx-auto relative z-10">
          <div
            class="flex flex-col items-center justify-center space-y-4 text-center mb-20"
            data-animate="crm-header"
            :class="isVisible['crm-header'] ? 'animate-fade-in-up' : 'opacity-0'"
          >
            <div class="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
              CRM-интеграции
            </div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Интегрируем с <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">любой CRM</span>
            </h2>
            <p class="max-w-2xl text-gray-400 text-lg md:text-xl">
              Подключаем ваш сайт к популярным CRM-системам для автоматизации продаж
            </p>
          </div>

          <!-- CRM Grid with hover effects -->
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-20"
            data-animate="crm-grid"
            :class="isVisible['crm-grid'] ? 'animate-fade-in-up' : 'opacity-0'"
          >
            <div
              v-for="(crm, index) in crmSystems"
              :key="crm.name"
              class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" :style="{ background: `radial-gradient(circle at center, ${crm.color}20, transparent)` }"></div>
              <div
                class="relative w-16 h-16 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                :style="{ backgroundColor: crm.color + '20' }"
              >
                <span
                  class="text-3xl font-bold transition-all duration-300"
                  :style="{ color: crm.color }"
                >
                  {{ crm.name.charAt(0) }}
                </span>
              </div>
              <span class="relative text-white font-medium text-center">{{ crm.name }}</span>
            </div>
          </div>

          <!-- Benefits -->
          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              class="text-center group"
              data-animate="benefit-1"
              :class="isVisible['benefit-1'] ? 'animate-fade-in-up' : 'opacity-0'"
            >
              <div class="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-green-500/25">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">Повысим продажи</h3>
              <p class="text-gray-400">Автоматизация воронки, мгновенные уведомления, аналитика конверсий</p>
            </div>

            <div
              class="text-center group"
              data-animate="benefit-2"
              :class="isVisible['benefit-2'] ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'"
            >
              <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/25">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">Проведём аудит</h3>
              <p class="text-gray-400">Выявим узкие места и предложим решения для оптимизации</p>
            </div>

            <div
              class="text-center group"
              data-animate="benefit-3"
              :class="isVisible['benefit-3'] ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'"
            >
              <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-purple-500/25">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">Автоматизируем</h3>
              <p class="text-gray-400">Освободим время от ручного ввода данных и рутинных задач</p>
            </div>
          </div>
        </div>
      </section>

      <!-- What You Get Section -->
      <section class="w-full py-24 lg:py-32 relative overflow-hidden">
        <!-- Animated background -->
        <div class="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
        <div class="absolute inset-0">
          <!-- Animated gradient mesh -->
          <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-green-600/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-600/15 to-transparent rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
          <div class="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        <!-- Diagonal lines pattern -->
        <div class="absolute inset-0 opacity-[0.02]" style="background-image: repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%); background-size: 30px 30px;"></div>
        <!-- Top line -->
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        <div class="container px-4 md:px-6 mx-auto relative z-10">
          <div
            class="flex flex-col items-center justify-center space-y-4 text-center mb-20"
            data-animate="benefits-header"
            :class="isVisible['benefits-header'] ? 'animate-fade-in-up' : 'opacity-0'"
          >
            <div class="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
              Преимущества
            </div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Что вы получите</h2>
            <p class="max-w-2xl text-gray-400 text-lg md:text-xl">
              Не просто сайт, а инструмент для роста бизнеса
            </p>
          </div>

          <div
            class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            data-animate="benefits-grid"
            :class="isVisible['benefits-grid'] ? 'animate-fade-in-up' : 'opacity-0'"
          >
            <div class="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Бесплатный аудит</h3>
              <p class="text-gray-400 text-sm">Проанализируем текущую ситуацию и выявим точки роста</p>
            </div>

            <div class="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Детальное ТЗ</h3>
              <p class="text-gray-400 text-sm">Составим техническое задание с описанием всех функций</p>
            </div>

            <div class="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Рост конверсии</h3>
              <p class="text-gray-400 text-sm">Проверенные решения для увеличения заявок</p>
            </div>

            <div class="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Поддержка 24/7</h3>
              <p class="text-gray-400 text-sm">Техническая поддержка и быстрое решение вопросов</p>
            </div>

            <div class="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-800 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Гибкая настройка</h3>
              <p class="text-gray-400 text-sm">Интеграция под ваши бизнес-процессы</p>
            </div>

            <div class="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Быстрый запуск</h3>
              <p class="text-gray-400 text-sm">От идеи до рабочего продукта в кратчайшие сроки</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section id="contact" class="w-full py-24 lg:py-32 relative overflow-hidden">
        <!-- Animated background -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"></div>
        <div class="absolute inset-0">
          <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
          <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container px-4 md:px-6 mx-auto relative z-10">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div
              class="lg:w-1/2 text-center lg:text-left"
              data-animate="cta-text"
              :class="isVisible['cta-text'] ? 'animate-fade-in-up' : 'opacity-0'"
            >
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Готовы увеличить <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">продажи?</span>
              </h2>
              <p class="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                Оставьте заявку — проведём бесплатный аудит вашего бизнеса и предложим решения для роста.
              </p>
              <div class="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div class="flex items-center text-white/90">
                  <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                    <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  Бесплатная консультация
                </div>
                <div class="flex items-center text-white/90">
                  <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                    <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  Ответ за 15 минут
                </div>
              </div>
            </div>

            <div
              class="lg:w-1/2 w-full max-w-md"
              data-animate="cta-form"
              :class="isVisible['cta-form'] ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'"
            >
              <Card class="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardHeader class="pb-4">
                  <CardTitle class="text-center text-2xl text-white">Получить бесплатный аудит</CardTitle>
                </CardHeader>
                <CardContent>
                  <form @submit="handleFormSubmit" class="space-y-4">
                    <div class="space-y-2">
                      <Label for="name" class="text-white/80">Имя *</Label>
                      <Input
                        id="name"
                        placeholder="Введите ваше имя"
                        required
                        class="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                      />
                    </div>
                    <div class="space-y-2">
                      <Label for="phone" class="text-white/80">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (XXX) XXX-XX-XX"
                        required
                        class="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                      />
                    </div>
                    <div class="space-y-2">
                      <Label for="email" class="text-white/80">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        class="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                      />
                    </div>
                    <div class="space-y-2">
                      <Label for="message" class="text-white/80">Расскажите о проекте</Label>
                      <textarea
                        id="message"
                        rows="3"
                        placeholder="Какой сайт нужен? Какая CRM?"
                        class="w-full px-3 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-md text-sm focus:outline-none focus:border-white/40 resize-none"
                      ></textarea>
                    </div>
                    <Button type="submit" class="w-full bg-white text-gray-900 hover:bg-gray-100 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-[1.02]">
                      Получить бесплатный аудит
                    </Button>
                    <p class="text-xs text-white/50 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="w-full border-t border-gray-800 bg-black">
      <div class="container mx-auto py-8 px-4 md:px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center space-x-2">
            <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">NeuroFlow</span>
          </div>
          <div class="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
            <span>г. Астана, Мангилик ел 55/7</span>
            <span class="hidden md:block">•</span>
            <a href="tel:+77064076621" class="hover:text-white transition-colors">+7 706 407 66 21</a>
            <span class="hidden md:block">•</span>
            <a href="https://neuroflow.kz/" class="hover:text-white transition-colors">neuroflow.kz</a>
          </div>
          <nav class="flex gap-6">
            <a href="/privacy" class="text-sm text-gray-500 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/agreement" class="text-sm text-gray-500 hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </nav>
        </div>
        <div class="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; 2025 NeuroFlow. Все права защищены.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Animations */
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -30px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(30px, 10px) scale(1.05); }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll-down {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(6px); opacity: 0.5; }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.animate-blob {
  animation: blob 10s infinite;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

.animate-scroll-down {
  animation: scroll-down 2s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-600 { animation-delay: 600ms; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
.animation-delay-6000 { animation-delay: 6s; }

/* Particles */
.particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  left: var(--x);
  animation: particle-float var(--duration) linear infinite;
  animation-delay: var(--delay);
}

@keyframes particle-float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
