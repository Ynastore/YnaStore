
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    const audio = new Audio('https://www.myinstants.com/media/sounds/pop-cat-original-meme.mp3');
    audio.play();
  });
});
