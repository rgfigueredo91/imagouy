let lastScrollTop = 100;
			navbar = document.getElementById("navbar-noboots");
			navbarphone = document.getElementById("phonenavbarid");
			window.addEventListener("scroll", function () {
				var scrollTop = window.pageYOffset || document
					.documentElement.scrollTop;
				if (scrollTop > lastScrollTop) {
					navbar.style.top = "-100px";
					navbarphone.style.top = "-80px";
				} else {
					navbar.style.top = "0";
					navbarphone.style.top = "0";
				}
				lastScrollTop = scrollTop;
			})


			