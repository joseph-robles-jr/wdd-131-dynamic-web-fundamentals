const articles = [
	{
		id: 1,
		title: 'The Book of Mormon',
		date: 'July 5, 2022',
		description: 'em ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem autem modi distinctio quis natus dolorum dolores ea molestiae, corporis aspernatur impedit atque, officiis voluptas. Veritatis fuga aliquid quos laudantium.',
		imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-07BtMPlJimo%2FT2ugvQamV_I%2FAAAAAAAAKlA%2FYeBLJcJ5gQU%2Fs1600%2Fbooktemplate-generic.png&f=1&nofb=1&ipt=b1d7012545e732c1dc63676264a096595058bedf3067146f3ebf0dbf3b4dc1ac&ipo=images',
		imgAlt: 'Book cover for BOM',
		ages: '0-1000',
		genre: 'Religion',
		stars: '*****'

	},
	{
		id: 2,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 3,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 44,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his Aunt Pol and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
]

function createArticle(item) { //I was having dificulty understanding how to do it and used chatGPT to teach me this. it may not be what the course is expecting.
	const newArticle = document.createElement("article");

	newArticle.classList.add('blog_entry');

	const articleTemplate = `
	        <div class="sidebar_left"> <!--The left sidebar-->
            <h3 class="date">${item.date}</h3>
            <h4 class="genere">${item.genre}</h4>
        </div>
            <div class="main_content">
                <h3 class="book_title">${item.title}</h3>
                <img class="book_cover" src="${item.imgSrc}" alt="${item.imgAlt}">
                <p class="book_description">${item.description}</p>        
            </div>
			`;

		newArticle.innerHTML = articleTemplate;
		
		return newArticle;
	}



const books = document.querySelector(".blog_entry"); //where we want to append articles to.

articles.forEach((article) => {

	const returned_value = createArticle(article);
	books.append(returned_value);
}	
);