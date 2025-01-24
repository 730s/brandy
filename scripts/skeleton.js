window.addEventListener('load', function () {
    // Remover os skeletons quando o conteúdo for carregado
    document.querySelectorAll('.skeleton').forEach(skeleton => {
        skeleton.style.display = 'none'; // Remove o skeleton
    });
});
