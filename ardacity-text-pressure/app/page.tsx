"use client"

import TextPressure from "../templates/TextPressure"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h2 className="text-white text-2xl mb-8">ArDacity Text Pressure Demo</h2>

      <div className="w-full max-w-3xl">
        <div style={{ position: "relative", height: "200px", marginBottom: "2rem" }}>
          <TextPressure
            text="PRESSURE"
            flex={true}
            alpha={false}
            stroke={true}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>

        <div style={{ position: "relative", height: "200px" }}>
          <TextPressure
            text="ARDACITY"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={false}
            textColor="#00ffff"
            minFontSize={36}
          />
        </div>
      </div>

      <div className="mt-8 text-white text-center max-w-md">
        <p>Move your cursor over the text to see the pressure effect in action!</p>
      </div>
    </div>
  )
}
