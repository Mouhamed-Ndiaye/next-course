"use client";
import _ from "lodash";
import dynamic from "next/dynamic";
import { useState } from "react";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  const [isVisible, setVisible] = useState(false);
  // const session = await getServerSession(authOptions);
  return (
    // <main>
    //   <h1 className="">Hello {session && <span>{session.user!.name}</span>}</h1>
    //   <Link href="/users">Users</Link>
    //   <ProductCard />
    // </main>
    // <main className="relative h-screen">
    //   <Image
    //     src="https://bit.ly/react-cover"
    //     alt="My picture"
    //     fill
    //     className="object-cover"
    //     sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
    //     quality={100}
    //     priority
    //   />
    // </main>
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ =( await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "producte.title",
//     description: "product.description",
//   };
// }
