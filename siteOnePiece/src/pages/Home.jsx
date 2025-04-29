import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Home.module.css'

const news = [
  {
    id: 1,
    title: "Sortie d'un nouveau set: Romance crépusculaire",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2025/01/ohara-cropped.jpg",
    description: "Découvrez les dernières cartes sur des moments iconic de la série !"
  },
  {
    id: 2,
    title: "Annoncement de tournoi",
    image: "https://i.pinimg.com/736x/1f/cd/52/1fcd52fef35ce0b2c7fbcdddadc2f60b.jpg",
    description: "Rejoignez nous pour notre prochain tournoi de cartes et montrez qui est le meilleur !"
  },
  {
    id: 3,
    title: "Guide stratégique",
    image: "https://cdn.shopify.com/s/files/1/0770/3425/8763/files/water_7_one_piece.jpg?v=1701945579",
    description: "Apprenez des stratégies avancés pour devenir plus fort"
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue sur le jeu de carte One Piece</h1>
      
      <div className={styles.newsCarousel}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className={styles.swiper}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.carouselSlide}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.carouselImage}
                />
                <div className={styles.carouselContent}>
                  <h2 className={styles.carouselTitle}>{item.title}</h2>
                  <p className={styles.carouselDescription}>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.newsSection}>
        <h2 className={styles.newsSectionTitle}>Dernière nouvelle</h2>
        <div className={styles.newsGrid}>
          {news.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.newsCardImage}
              />
              <div className={styles.newsCardContent}>
                <h3 className={styles.newsCardTitle}>{item.title}</h3>
                <p className={styles.newsCardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}