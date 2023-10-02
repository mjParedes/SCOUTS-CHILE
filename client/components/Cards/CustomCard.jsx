import Image from "next/image";
import Link from "next/link";

const CustomCard = ({ imageUrl, title, link }) => {
  return (
    <article className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-1 sm:m-2 md:m-4">
      <Image className="w-full h-auto" src={imageUrl} alt={title} />
      <hr />

      <section className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      </section>

      <section className="px-6 py-4">
        <Link
          href={'/'}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full"
        >
          Ver más
        </Link>
      </section>
    </article>
  );
};

export default CustomCard;
