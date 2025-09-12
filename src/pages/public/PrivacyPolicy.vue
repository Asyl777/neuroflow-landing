<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    <main class="flex-1">
      <div class="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div class="max-w-4xl mx-auto bg-slate-800 bg-opacity-50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Политика конфиденциальности
          </h1>
          <div class="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed space-y-6">
            <p class="text-lg">
              Компания NeuroFlow Digital (далее – «Компания») уважает вашу конфиденциальность и стремится защищать персональные данные при использовании сайта neuroflow.kz. Настоящая Политика описывает, какие данные мы собираем, как их используем и защищаем.
            </p>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">1. Сбор данных</h2>
              <p>Мы можем собирать следующие категории данных:</p>
              <ul class="list-disc list-inside space-y-2 pl-4">
                <li><b>Персональные данные:</b> Имя, email, номер телефона и другие данные, которые вы добровольно предоставляете через формы на сайте.</li>
                <li><b>Технические данные:</b> IP-адрес, тип браузера, данные cookie и другая информация, собираемая автоматически для анализа работы сайта.</li>
              </ul>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">2. Использование данных</h2>
              <p>Собранные данные используются для:</p>
              <ul class="list-disc list-inside space-y-2 pl-4">
                <li>Обеспечения работы сайта и предоставления наших услуг.</li>
                <li>Связи с вами по вашим запросам.</li>
                <li>Улучшения качества сервиса и пользовательского опыта.</li>
                <li>Отправки маркетинговых сообщений (только с вашего согласия).</li>
                <li>Соблюдения законодательства Республики Казахстан.</li>
              </ul>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">3. Передача данных</h2>
              <p>Мы не передаём ваши данные третьим лицам, за исключением случаев, когда это необходимо для выполнения договора, по требованию закона или с вашего прямого согласия.</p>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">4. Безопасность и хранение</h2>
              <p>Мы принимаем все разумные меры для защиты ваших данных и храним их на защищённых серверах ровно столько, сколько необходимо для выполнения целей, описанных в этой Политике.</p>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">5. Ваши права</h2>
              <p>Вы имеете право запрашивать доступ к вашим данным, требовать их исправления, удаления или ограничивать их обработку, а также отозвать свое согласие.</p>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">6. Файлы cookie</h2>
              <p>Мы используем cookie для анализа трафика и персонализации контента. Вы можете отключить их в настройках браузера, но это может повлиять на работу некоторых функций сайта.</p>
            </div>

            <div class="space-y-4">
              <h2 class="text-2xl font-semibold border-l-4 border-purple-500 pl-4">7. Изменения и контакты</h2>
              <p>Мы можем обновлять эту Политику, актуальная версия всегда доступна на сайте. Если у вас есть вопросы, свяжитесь с нами по email: <a href="mailto:support@neuroflow.kz" class="text-purple-400 hover:underline">support@neuroflow.kz</a>.</p>
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

<style scoped>
/* Стили Tailwind CSS применяются через классы, дополнительные стили не нужны */
</style>