// Função para carregar a API de Tradução do Google e inserir o elemento de tradução
/*function googleTranslateElementInit() {
    var googleTranslateScript = document.createElement('script');
    googleTranslateScript.type = 'text/javascript';
    googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(googleTranslateScript);

    // Cria o elemento de tradução e o coloca na página
    new google.translate.TranslateElement({
        pageLanguage: 'pt', // Idioma inicial do seu site (Português)
        includedLanguages: 'en', // Idioma para tradução (Inglês)
        layout: 'hidden', // Tradução oculta inicialmente
        multilanguagePage: true
    }, 'google_translate_element');
}

// Aciona a função quando a página é carregada
window.addEventListener('load', googleTranslateElementInit);

// Função para acionar a tradução ao clicar no botão (opcional)
document.getElementById('translate-button').addEventListener('click', function () {
    // Exibe a tradução
    document.getElementById('google_translate_element').style.display = 'block';
});
*/
/* HTML
<div class="gtranslate_wrapper"></div>
  <!--<button id="translate-button">Traduzir</button>-->
  <main><!--id="content"-->
    <!-- Primeira Section -->
    Website: gtranslate.io
window.gtranslateSettings = {"default_language":"pt-br","languages":["en",,"pt","fr","de","es","ja",],"wrapper_selector":".gtranslate_wrapper","switcher_vertical_position":"top","float_switcher_open_direction":"left"}
*/