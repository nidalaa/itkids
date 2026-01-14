// Smooth scroll to workshops section
function scrollToWorkshops() {
    const workshopsSection = document.getElementById('workshops');
    if (workshopsSection) {
        workshopsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}
