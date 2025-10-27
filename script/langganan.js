// Pricing data
        const plans = {
            monthly: {
                amount: '3.000.000',
                period: '/bulan',
                note: 'Rp 100.000 per hari'
            },
            yearly: {
                amount: '1.000.000',
                period: '/tahun',
                note: 'Rp 84.000 per bulan'
            }
        };

        // Get elements
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        const priceAmount = document.getElementById('price-amount');
        const pricePeriod = document.getElementById('price-period');
        const priceNote = document.getElementById('price-note');

        // Toggle functionality
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Update price display
                const plan = button.dataset.plan;
                priceAmount.textContent = plans[plan].amount;
                pricePeriod.textContent = plans[plan].period;
                priceNote.textContent = plans[plan].note;
            });
        });

        // CTA Button click
        document.querySelector('.cta-button').addEventListener('click', () => {
            alert('Terima kasih! Fitur pembayaran akan segera tersedia.');
        });