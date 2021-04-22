import React, { useState } from "react"

const Logo = () => {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "100%",
        position: "relative",
        minWidth: "50px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <svg x="0px" y="0px" viewBox="0 0 800 1280">
            <g id="layer">
              <g id="layer_v" transform="translate(0, -300)">
                <path
                  id="v"
                  d="M601.4,663.8c-6.9,160.8-84,303.5-201.4,398.2c-117.4-94.7-194.4-237.3-201.4-398.2
			c-47.1,18.9-91.4,44.3-131.4,75.5C97.9,948.8,224,1127.2,400,1229c176-101.8,302.1-280.3,332.8-489.7
			C692.7,708.1,648.5,682.7,601.4,663.8z"
                />
              </g>
              <g id="layer_i_a" transform="translate(0, 220)">
                <g id="layer_i">
                  <path
                    id="i"
                    d="M400,406.8c96.3,140.5,96.3,325.8,0,466.4C303.7,732.7,303.7,547.3,400,406.8L400,406.8z"
                  />
                </g>
                <g id="layer_a">
                  <path
                    id="a"
                    d="M198.6,663.8c-0.3-7.9-0.5-15.8-0.5-23.8c0-170.5,78.8-322.6,201.9-422c123.1,99.3,201.9,251.4,201.9,422
				c0,8-0.2,15.9-0.5,23.8c47.1,18.9,91.4,44.3,131.4,75.5c4.8-32.9,7.2-66.1,7.2-99.3c0-251.7-136.8-471.4-340-589
				C196.8,168.6,60,388.3,60,640c0,33.2,2.4,66.4,7.2,99.3C107.3,708.1,151.5,682.7,198.6,663.8z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

const Cover = loaded => {
  const [animate, setAnimate] = useState("svg-logo logo-animation__scaleX")
  const [animationEnd, setAnimationEnd] = useState(false)
  const animationList = ["scaleX", "shake", "fadeOut"]

  const handleAnimateEnd = event => {
    const { animationName } = event

    if (animationName === animationList[0])
      setAnimate("logo-animation__shake logo-animation__repeat")

    if (animationName === animationList[2]) {
      setAnimate("")
      setAnimationEnd(true)
    }
  }

  const handleAnimationIteration = event => {
    const { animationName } = event

    if (animationName === animationList[0]) {
      console.log(loaded)
      if (loaded) {
        setAnimate("logo-animation__fadeOut")
      }
    }
  }

  return animationEnd ? (
    ""
  ) : (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={{
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 800 1280"
        onAnimationEnd={handleAnimateEnd}
        onAnimationIteration={handleAnimationIteration}
      >
        <g
          id="layer"
          className={animate}
          transform-origin="center"
          transform="scale(1 1)"
        >
          <g id="layer_v">
            <path
              id="v"
              d="M601.4,663.8c-6.9,160.8-84,303.5-201.4,398.2c-117.4-94.7-194.4-237.3-201.4-398.2
  c-47.1,18.9-91.4,44.3-131.4,75.5C97.9,948.8,224,1127.2,400,1229c176-101.8,302.1-280.3,332.8-489.7
        C692.7,708.1,648.5,682.7,601.4,663.8z"
            />
            <animateTransform
              id="layerVAnimation"
              attributeName="transform"
              attributeType="XML"
              type="translate"
              begin="layerAnimation.end"
              keyTimes="0; 0.5; 1"
              values="0 0; 0 25; 0 -300"
              fill="freeze"
              dur="1.5s"
              repeatCount=""
            />
          </g>
          <g id="layer_i_a">
            <g id="layer_i">
              <path
                id="i"
                d="M400,406.8c96.3,140.5,96.3,325.8,0,466.4C303.7,732.7,303.7,547.3,400,406.8L400,406.8z"
              />
            </g>
            <g id="layer_a">
              <path
                id="a"
                d="M198.6,663.8c-0.3-7.9-0.5-15.8-0.5-23.8c0-170.5,78.8-322.6,201.9-422c123.1,99.3,201.9,251.4,201.9,422
    c0,8-0.2,15.9-0.5,23.8c47.1,18.9,91.4,44.3,131.4,75.5c4.8-32.9,7.2-66.1,7.2-99.3c0-251.7-136.8-471.4-340-589
    C196.8,168.6,60,388.3,60,640c0,33.2,2.4,66.4,7.2,99.3C107.3,708.1,151.5,682.7,198.6,663.8z"
              />
            </g>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              begin="layerAnimation.end"
              values="0 0; 0 -25; 0 220"
              keyTimes="0; 0.5; 1"
              fill="freeze"
              dur="1.5s"
              repeatCount=""
            />
          </g>

          <animateTransform
            id="layerAnimation"
            attributeName="transform"
            begin="0.5s"
            attributeType="XML"
            dur="0.5s"
            from="0 1"
            to="1 1"
            fill="freeze"
            repeatCount=""
            type="scaleX"
            calcMode="linear"
          ></animateTransform>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            begin="layerVAnimation.end"
            dur="1s"
            values="1 1; 1 1; 1 1"
            keyTimes="0; 0.5; 1"
            fill="freeze"
            repeatCount=""
            type="scale"
            calcMode="linear"
          ></animateTransform>
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="layerVAnimation.end"
            dur="1s"
            values="1; 1; 1"
            keyTimes="0; 0.5; 1"
            fill="freeze"
            repeatCount=""
            type="opacity"
            calcMode="linear"
          ></animate>
        </g>
      </svg>
    </div>
  )
}

export { Logo, Cover }
