import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Promo Imperdivel Pendaftaran Siswa Baru!",
    paragraph:
      "Daftar Siswa Baru Les Privat Sekarang dan Dapatkan Diskon 50%! 💸 Jangan lewatkan kesempatan ini untuk menikmati pembelajaran yang lebih terjangkau namun tetap berkualitas. ",
    image: "/images/blog/arundaya-02.jpg",
    author: {
      name: "Virga Ananda",
      image: "/images/blog/author.png",
      designation: "Owner",
    },
    tags: ["School"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Arundaya Edukasi Back to school",
    paragraph:
    "Dengan semangat yang menyala-nyala! 📚💪 Siap-siap belajar lagi setelah liburan panjang, guys! 😊✨ Jangan lupa bawa energi positif dan semangat juang yang membara ya!",
    image: "/images/blog/arundaya-03.jpg",
    author: {
      name: "Virga Ananda",
      image: "/images/blog/author.png",
      designation: "Owner",
    },
    tags: ["School"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Join our team as a private tutor for Arundaya Education!",
    paragraph:
      "Take your teaching skills to the next level and inspire the next generation of learners. Don't miss out on this amazing opportunity to make a difference in education! 💡",
    image: "/images/blog/arundaya-01.jpg",
    author: {
      name: "Virga Ananda",
      image: "/images/blog/author.png",
      designation: "Owner",
    },
    tags: ["Career"],
    publishDate: "2025",
  },
];
export default blogData;
