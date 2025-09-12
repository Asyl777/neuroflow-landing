<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    <main class="flex-1">
      <div class="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div class="max-w-4xl mx-auto bg-slate-800 bg-opacity-50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Пользовательское соглашение
          </h1>
          <div class="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed space-y-6">
            <p class="text-lg">
              Настоящее Пользовательское соглашение (далее – «Соглашение») регулирует отношения между NeuroFlow Digital (далее – «Компания») и пользователем сети Интернет (далее – «Пользователь») по использованию сайта neuroflow.kz (далее – «Сайт»).
            </p>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">1. Предмет Соглашения</h2>
              <p>Компания предоставляет Пользователю доступ к использованию Сайта и его функционала. Используя Сайт, Пользователь выражает свое полное и безоговорочное согласие с условиями настоящего Соглашения.</p>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">2. Права и обязанности сторон</h2>
              <ul class="list-disc list-inside space-y-2 pl-4">
                <li><b>Пользователь обязуется:</b> Не нарушать работоспособность Сайта и не использовать его в противозаконных целях. Предоставлять достоверную информацию при заполнении форм.</li>
                <li><b>Компания вправе:</b> Изменять условия данного Соглашения в одностороннем порядке. Ограничить доступ к Сайту в случае нарушения Пользователем условий Соглашения.</li>
              </ul>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">3. Интеллектуальная собственность</h2>
              <p>Все объекты, доступные на Сайте, в том числе элементы дизайна, текст, графические изображения, являются объектами исключительных прав Компании. Использование контента возможно только с предварительного согласия правообладателя.</p>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">4. Ограничение ответственности</h2>
              <p>Сайт предоставляется «как есть». Компания не несет ответственности за любые убытки, произошедшие из-за использования или невозможности использования Сайта.</p>
            </div>

             <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">5. Заключительные положения</h2>
              <p>Настоящее Соглашение вступает в силу с момента начала использования Пользователем Сайта и действует бессрочно. Все споры решаются в соответствии с действующим законодательством Республики Казахстан.</p>
            </div>

          </div>

          <div class="text-center mt-12">
            <router-link to="/">
              <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
                Вернуться на главную
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Никакой логики для этой страницы пока не требуется
</script>