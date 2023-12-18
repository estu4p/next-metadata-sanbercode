import Layout from "@/layouts";

export default function Main() {
  return (
    <>
      <Layout metaTitle={"Home"} metaDescription={"Informasi utama Next App"}>
        {/* Content Styling dengan Global CSS */}
        <div className="content">
          <p>Home</p>
        </div>
      </Layout>
    </>
  );
}
