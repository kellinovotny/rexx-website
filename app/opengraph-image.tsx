import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Rexx | Never Forget a Recommendation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadManrope(weight: 600 | 800): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}&display=swap`,
    ).then((res) => res.text())
    const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:opentype|truetype)'\)/)
    if (!match) return null
    const res = await fetch(match[1])
    if (!res.ok) return null
    return await res.arrayBuffer()
  } catch {
    return null
  }
}

function RexxMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="60 50 245 220" xmlns="http://www.w3.org/2000/svg">
      <path d="M125.53 66.1102C108.631 87.938 100.886 140.923 99.1256 164.687L151.935 118.039C147.71 94.8031 139.613 73.7382 136.092 66.1102C132.571 60.4773 127.584 63.7632 125.53 66.1102Z" fill="#FF9900" />
      <path d="M128.17 74.5012C121.129 87.8795 114.088 124.083 111.448 140.512C118.489 129.951 134.918 119.682 142.253 115.868C141.549 107.419 135.505 84.7696 132.571 74.5012C131.163 68.8683 129.051 72.1542 128.17 74.5012Z" fill="#FFB647" />
      <path d="M243.47 66.1102C260.369 87.938 268.114 140.923 269.875 164.687L217.066 118.039C221.29 94.8031 229.388 73.7382 232.908 66.1102C236.429 60.4773 241.416 63.7632 243.47 66.1102Z" fill="#FF9900" />
      <path d="M240.83 74.5012C247.871 87.8795 254.912 124.083 257.552 140.512C250.511 129.951 234.082 119.682 226.747 115.868C227.451 107.419 233.495 84.7696 236.429 74.5012C237.837 68.8683 239.949 72.1542 240.83 74.5012Z" fill="#FFB647" />
      <path d="M87.1562 257.513H283.43C285.717 179.18 266.354 110.528 184.853 110.528C104.08 110.528 82.4026 180.94 87.1562 257.513Z" fill="#FF9900" />
      <path d="M87.1417 257.513L283.885 257.512C284.751 239.911 287.478 209.105 273.395 171.258C236.429 188.861 222.26 195.902 184.414 195.903C149.208 195.903 131.691 188.861 96.3986 172.139C84.1629 208.225 85.9233 223.187 87.1417 257.513Z" fill="#FFF3DB" />
      <path d="M180.099 144.414C180.099 157.088 177.752 171.992 176.579 177.86C181.508 176.451 187.434 177.273 189.781 177.86C188.373 172.931 186.554 153.509 186.26 144.414L185.38 126.811C184.5 121.53 181.86 121.53 180.979 126.811L180.099 144.414Z" fill="#FFFDF9" />
      <line x1="183.518" y1="207.344" x2="183.518" y2="231.989" stroke="#452010" strokeWidth="2.64045" />
      <ellipse cx="183.958" cy="194.142" rx="24.6442" ry="18.4831" fill="#452010" />
      <path d="M143.471 202.064C144.351 210.572 153.329 228.292 182.198 231.109C197.16 231.109 208.25 226.884 217.404 209.985" stroke="#452010" strokeWidth="2.64045" strokeLinecap="round" fill="none" />
      <path d="M148.067 160.83C149.139 160.83 150.011 159.963 150.011 158.891C150.011 152.906 153.123 147.85 156.804 147.85C160.485 147.85 163.597 152.904 163.597 158.891C163.597 159.961 164.463 160.83 165.54 160.83C166.609 160.83 167.48 159.963 167.48 158.891C167.48 150.527 162.791 143.974 156.806 143.974C150.82 143.974 146.131 150.527 146.131 158.891C146.129 159.963 146.995 160.83 148.067 160.83Z" fill="#452010" />
      <path d="M199.116 160.83C200.188 160.83 201.059 159.963 201.059 158.891C201.059 152.906 204.172 147.85 207.852 147.85C211.533 147.85 214.646 152.904 214.646 158.891C214.646 159.961 215.512 160.83 216.589 160.83C217.657 160.83 218.529 159.963 218.529 158.891C218.529 150.527 213.839 143.974 207.854 143.974C201.869 143.974 197.18 150.527 197.18 158.891C197.178 159.963 198.044 160.83 199.116 160.83Z" fill="#452010" />
    </svg>
  )
}

export default async function Image() {
  const [semiBold, extraBold] = await Promise.all([loadManrope(600), loadManrope(800)])

  const fonts: { name: string; data: ArrayBuffer; weight: 600 | 800; style: 'normal' }[] = []
  if (semiBold) fonts.push({ name: 'Manrope', data: semiBold, weight: 600, style: 'normal' })
  if (extraBold) fonts.push({ name: 'Manrope', data: extraBold, weight: 800, style: 'normal' })

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#452010',
          padding: '60px 96px',
          gap: 56,
          fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", sans-serif',
          color: '#FAF7F2',
        }}
      >
        <RexxMark size={460} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 224,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.05em',
              marginLeft: -14,
            }}
          >
            Rexx
          </div>
          <div
            style={{
              fontSize: 54,
              fontWeight: 600,
              marginTop: 28,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              whiteSpace: 'pre-line',
            }}
          >
            {'Never Forget a\nRecommendation'}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length ? fonts : undefined,
    },
  )
}
