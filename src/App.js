import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"

import { CssBaseline } from "@material-ui/core"
import { TMTheme, TMTextfield, TMAutocomplete } from "./atoms"

import AppBar from "./screens/TMAppBar"

function App() {

  const games = ["Minecraft", "League of Legends", "Among Us"]

  return (
    <ThemeProvider theme={TMTheme}>
      <AppBar />
      <CssBaseline />
      <div style={{ padding: 40 }}>
        <TMTextfield label="Games" defaultValue="jello" helperText="hello" rows={4} multiline />
        <TMTextfield label="Games" defaultValue="jello" type="number"/>
        <TMAutocomplete options={games} getOptionLabel={(game) => game}></TMAutocomplete>
      </div>
    </ThemeProvider>
  )
}

export default App
