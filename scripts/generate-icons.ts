import sharp from "sharp"
import fs from "fs"
import path from "path"

const sizes = [192, 512]

async function generateIcons() {
  const svgBuffer = fs.readFileSync(path.join(process.cwd(), "public", "logo.svg"))

  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(process.cwd(), "public", `logo-${size}.png`))
  }

  console.log("Icons generated successfully!")
}

generateIcons().catch(console.error)

