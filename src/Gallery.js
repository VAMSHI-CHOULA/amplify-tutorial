
export default function Gallery(){
    const imgURL = "/horse.jpg";
    const lionImg = "/lion.jpg";
    const ozritImg ="/ozrit.png";
    return (
        <section id="gallery" style={{ padding: "50px 0" }}>
          <h1>Gallery</h1>

          <div className="images" style={{ display: "flex", gap: "20px" }}>
            <img
              src={imgURL}
              alt="Horse"
              width="200"
              style={{ objectFit: "cover" }}
            />
            <img
              src={lionImg}
              alt="Lion"
              width="200"
              style={{ objectFit: "cover" }}
            />
             <img
              src={ozritImg}
              alt="Ozrit"
              width="50"
            />
          </div>
        </section>
    )
}