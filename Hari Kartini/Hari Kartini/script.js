function ubahTema() {
  const root = document.documentElement;
  const bgSekarang = getComputedStyle(root).getPropertyValue('--bg-color').trim();

  if (bgSekarang === '#fff9f0') {
    // Ubah ke Dark Theme
    root.style.setProperty('--bg-color', '#1c1c1c');
    root.style.setProperty('--text-color', '#f5f5f5');
    root.style.setProperty('--header-color', '#2b2b2b');
    root.style.setProperty('--accent-color', '#c74c63');
  } else {
    // Ubah ke Light Theme
    root.style.setProperty('--bg-color', '#fff9f0');
    root.style.setProperty('--text-color', '#333');
    root.style.setProperty('--header-color', '#f9c5d1');
    root.style.setProperty('--accent-color', '#f3a6b1');
  }
}
