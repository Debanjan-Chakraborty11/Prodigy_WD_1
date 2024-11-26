// JavaScript for scroll effect, hover functionality, and form submission
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-item a');
    const form = document.getElementById('accountForm');
    const balanceMessage = document.getElementById('balanceMessage');
    const balanceAmount = document.getElementById('balanceAmount');

    // Function to add/remove 'scrolled' class on scroll
    function onScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);

    // Hover effect for menu items
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f8a700';
            this.style.color = '#333';
        });

        link.addEventListener('mouseout', function () {
            this.style.backgroundColor = '';
            this.style.color = '';
        });
    });

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting traditionally

        // Get form data
        const name = document.getElementById('name').value.trim();
        const accountNumber = document.getElementById('accountNumber').value.trim();

        // Validate form data
        if (name === '' || accountNumber === '') {
            alert('Please fill out both fields.');
            return;
        }

        // Simulate checking the balance (this is static for now)
        const mockBalances = {
            '123456': 5000.00,
            '987654': 200.00,
            '111222': 350.50,
        };

        const balance = mockBalances[accountNumber];

        if (balance !== undefined) {
            // Display balance
            balanceMessage.classList.remove('hidden');
            balanceAmount.textContent = `$${balance.toFixed(2)}`;
        } else {
            alert('Account number not found or invalid.');
        }
    });
});

