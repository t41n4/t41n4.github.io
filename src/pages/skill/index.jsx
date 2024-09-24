import React, { useEffect, useState } from 'react';
import { techStack, staticLayout } from '../../data';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function Skill() {
  const [mounted, setMounted] = useState(false);
  const [layouts, setLayouts] = useState(
    {
      lg: techStack.map((item, index) => ({
        i: index.toString(),
        x: (index * 1) % 8,
        y: Math.floor(index / 8),
        w: 1,
        h: 1,
      })),
    }
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const onLayoutChange = (layout, layouts) => {
    console.log("🚩 ~ file: index.jsx:27 ~ layouts:", layouts);
    setLayouts({ ...layouts });
  };

  const generateDOM = () => {
    return techStack.map((item, index) => (
      item.activate &&
      <span className="text-center" key={index.toString()} >
        <i
          title={item.name}
          className={`${item.icon}`}
          style={{ fontSize: 50 }}>
        </i>
        <p >{item.name}</p>
      </span>
    ));
  };

  return (
    <div className='info_item info_techology flex w-full items-center justify-center h-[100vh]'>
      <div className=' m-10 w-[500px] h-[500px]'>
        <ResponsiveReactGridLayout
          className='layout'
          cols={{ lg: 12, md: 10, sm: 6, xs: 8, xxs: 8 }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          rowHeight={75}
          layouts={staticLayout}
          containerPadding={[0, 0]}
          measureBeforeMount={false}
          useCSSTransforms={mounted}
          compactType={null}
          preventCollision={true}
          isDroppable={true}
          isResizable={false}
          onLayoutChange={onLayoutChange}

        >
          {generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    </div>

  )
}

export default Skill