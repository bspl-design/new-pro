        $(document).ready(function () {
            $('.clients-carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                responsive: {
                    0: { items: 2 },
                    600: { items: 3 },
                    1000: { items: 5 }
                }
            });

            $('.blogs-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplay: true,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    1000: { items: 3 }
                }
            });
        });

        $('.video-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots:false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });;
        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.counter');
            const speed = 150; // The lower the number, the faster the animation

            const animateCounter = (counter) => {
                const target = +counter.getAttribute('data-target');
                let count = 0;

                // Calculate the increment step
                const inc = target / speed;

                const updateCount = () => {
                    count += inc;

                    // Check if current count is less than the target
                    if (count < target) {
                        // Format the number with commas (e.g., 10,000)
                        counter.innerText = Math.ceil(count).toLocaleString();
                        // Call the function recursively for smooth animation
                        requestAnimationFrame(updateCount);
                    } else {
                        // Ensure it ends exactly on the target number
                        counter.innerText = target.toLocaleString();
                    }
                };

                updateCount();
            };

            // Use IntersectionObserver to trigger animation only when scrolled into view
            const observerOptions = {
                root: null,
                threshold: 0.5 // Triggers when 50% of the section is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        // Stop observing once the animation has run
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            counters.forEach(counter => {
                observer.observe(counter);
            });
        });
;

        document.addEventListener("DOMContentLoaded", () => {
            const videoCards = document.querySelectorAll('.video-card');

            videoCards.forEach(card => {
                const video = card.querySelector('video');
                const playBtn = card.querySelector('.play-btn');

                // Play video when the button or card is clicked
                playBtn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent duplicate clicks

                    // Optional: Pause all other videos before playing this one
                    document.querySelectorAll('.video-card video').forEach(v => {
                        if (v !== video) {
                            v.pause();
                            v.removeAttribute('controls');
                            v.parentElement.classList.remove('is-playing');
                        }
                    });

                    // Play the clicked video
                    video.play();
                    card.classList.add('is-playing');
                    video.setAttribute('controls', 'true'); // Show native video controls
                });

                // Reset the UI when the video ends naturally
                video.addEventListener('ended', () => {
                    card.classList.remove('is-playing');
                    video.removeAttribute('controls');
                });
            });
        });;