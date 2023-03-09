import React, {useState} from 'react'

function EnableMode() {

    const [darkStyle, setdarkStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    })

    const modeDark = () => {
      if (darkStyle.backgroundColor == "blue") {
        setdarkStyle({
          backgroundColor: "#222",
          color: "white",
        });
      } else {
        setdarkStyle({
          backgroundColor: "white",
          color: "black",
        });
      }
    };

    const modeRed = ()=>{
        if(darkStyle.backgroundColor == 'white'){
            setdarkStyle({
              backgroundColor: "red",
              color: "white",
            })
        }else{
            setdarkStyle({
              backgroundColor: "white",
              color: "black",
            });
        }
    }

    const modeGreen = ()=>{
        if(darkStyle.backgroundColor == 'red'){
            setdarkStyle({
              backgroundColor: "green",
              color: "white",
            })
        }else{
            setdarkStyle({
              backgroundColor: "red",
              color: "whit",
            });
        }
    }

    const modeBlue = ()=>{
        if(darkStyle.backgroundColor == 'green'){
            setdarkStyle({
              backgroundColor: "blue",
              color: "white",
            })
        }else{
            setdarkStyle({
              backgroundColor: "white",
              color: "black",
            });
        }
    }

  return (
    <>
        <div style={darkStyle}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti ipsam asperiores a voluptatem unde magni nihil fuga aperiam doloribus, tenetur reprehenderit hic accusantium dolorem, soluta, quasi iusto harum quia vero blanditiis recusandae. Accusamus dolorum commodi, temporibus, non dicta ex incidunt dignissimos nostrum vitae reprehenderit deleniti ipsa, repudiandae molestias. Soluta aperiam eum nam, inventore sed distinctio et voluptates? Iure ipsa nobis natus quo vero quibusdam corrupti dolores saepe. Veritatis debitis ea cum impedit, autem molestiae ratione quas voluptatum, quis omnis accusantium? Cum dicta nesciunt cupiditate, quod aliquam, sed saepe eum nihil eos ut dolorem suscipit laudantium velit illo rem? Recusandae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quos rerum esse. Esse nihil at eaque sunt et consectetur rem aperiam adipisci fugiat voluptatibus, rerum, tempora amet nemo suscipit porro.</p>
        </div>

        <h2>Change Mode</h2>
        <button onClick={modeRed}>Red</button>
        <button onClick={modeGreen}>Green</button>
        <button onClick={modeBlue}>Blue</button>
        <button onClick={modeDark}>Dark</button>

    </>
  )
}

export default EnableMode