function applyMeshGradient(element, { size = 8 } = {}) {
    const gradients = [];
    const rand = (min, max) => Math.random() * (max - min) + min;

    while (size-- > 0) {
        gradients.push(
            `radial-gradient(at ${rand(0, 100)}% ${rand(0, 100)}%,
                hsla(${rand(0, 360)}, ${rand(60, 100)}%, ${rand(60, 80)}%, 1),
                transparent 50%
                )`
        );
    }
    element.style.backgroundColor = `white`
    element.style.backgroundImage = gradients.join(',');
}

(() => {
    const el = document.getElementById('blog-5-css-mesh')
    if (el) {
        applyMeshGradient(el);
        setInterval(() => applyMeshGradient(el), 300);
    }
})();