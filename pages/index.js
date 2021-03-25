import Template from '../comps/Template'
import Sect1 from '../comps/sections/Sect1'
import Sect2 from '../comps/sections/Sect2'
import Sect3 from '../comps/sections/Sect3'
import Sect4 from '../comps/sections/Sect4'
import Sect5 from '../comps/sections/Sect5'

const Index = () => (
  <Template>
    <Sect1 />
    <Sect2 />
    <Sect3 />
    <Sect4 />
    <Sect5 />
    <div className="scrollbtn">
      <div></div>
    </div>
  </Template>
)

export default Index
