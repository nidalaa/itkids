const clientsData = {
  przedszkolaki: {
    title: "Przedszkolaki (4-6 lat)",
    info: [
      "Czas trwania zajęć: 45 minut",
      "Maksymalna liczba uczestników: 8 dzieci",
      "Wymagana obecność rodzica/opiekuna",
      "Materiały edukacyjne w cenie",
      "Zajęcia odbywają się w weekendy"
    ]
  },
  mlodsi: {
    title: "Młodsi uczniowie (7-9 lat)",
    info: [
      "Czas trwania zajęć: 60 minut",
      "Maksymalna liczba uczestników: 10 dzieci",
      "Możliwość pozostawienia dziecka na zajęciach",
      "Materiały edukacyjne w cenie",
      "Zajęcia w tygodniu i weekendy"
    ]
  },
  starsi: {
    title: "Starsi uczniowie (10-12 lat)",
    info: [
      "Czas trwania zajęć: 90 minut",
      "Maksymalna liczba uczestników: 12 dzieci",
      "Własny laptop mile widziany",
      "Projekty do kontynuacji w domu",
      "Zajęcia w tygodniu i weekendy"
    ]
  },
  nastolatkowie: {
    title: "Nastolatkowie (13-15 lat)",
    info: [
      "Czas trwania zajęć: 120 minut",
      "Maksymalna liczba uczestników: 12 osób",
      "Wymagany własny laptop",
      "Certyfikat ukończenia kursu",
      "Możliwość zajęć indywidualnych"
    ]
  }
};

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalList = document.getElementById('modalList');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.client-hexagon').forEach(hex => {
  hex.addEventListener('click', () => {
    const key = hex.dataset.modal;
    const data = clientsData[key];

    modalTitle.textContent = data.title;
    modalList.innerHTML = '';

    data.info.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalList.appendChild(li);
    });

    modalOverlay.style.display = 'flex';
  });
});

modalOverlay.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

modalClose.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

document.getElementById('scrollToWorkshops').addEventListener('click', () => {
  document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' });
});
