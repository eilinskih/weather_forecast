
import { render } from '@testing-library/react'
import NavSection from './NavSection'

describe("navSection", () => {
    test("navSection snapshot", () => {
        const navSection = render(<NavSection weatherData={{main: "test", icon: "test", description: "test", temp: 1, sunrise: 1, sunset: 1, windSpeed: 1, clouds: 1, daily: [{ date: 1, icon: "test"
            }]}}/>)
            expect(navSection).toMatchSnapshot();
    })
})