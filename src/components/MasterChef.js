import Master from "./CardBoxes/Master";
import Quality from "./CardBoxes/Quality";
import Online from "./CardBoxes/Online";
import ServiceAll from "./CardBoxes/ServiceAll";

function MasterChef() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <Master />

          <Quality />

          <Online />

          <ServiceAll />

        </div>
      </div>
    </div>
  )
}

export default MasterChef;