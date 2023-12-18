import Layout from "@/layouts";

export default function Profile() {
  return (
    <>
      <Layout
        metaTitle={"Profile"}
        metaDescription={"Informasi profile dari Next App"}
      >
        {/* Content Styling dengan Global CSS */}
        <div className="content">
          <p>Profile</p>
        </div>
      </Layout>
    </>
  );
}
