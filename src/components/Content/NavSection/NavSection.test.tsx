
import { render, screen } from '@testing-library/react'
import NavSection from './NavSection'

describe("navSection", () => {
    test("navSection renders with props", () => {
        render(<NavSection weatherData={{ main:"main test",
            icon:"testicon",
            description:"testdesc",
            temp:null,
            sunrise:123,
            sunset:123,
            windSpeed:null,
            clouds:null,
            daily:[{ date:123, icon:"testicon" }]
        }}/>)
    expect(screen.getByText(/sunrise/i)).toBeInTheDocument()
    expect(screen.getByText(/testdesc/i)).toBeInTheDocument()
    })
})