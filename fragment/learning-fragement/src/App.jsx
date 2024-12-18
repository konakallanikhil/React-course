import './App.css'

function App() {

  return (
    <>
    <h1>Understanding the Fragments</h1>
    
    <ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
<br></br>
<p>Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment?
  here in the above code we have 2 different dom objects one is H1 and other is Ul so to wrap both commonly we use Div tag but it make one more DOM object so int this case we can use React.Fragement and short hand
  </p></>
  )
}

export default App
