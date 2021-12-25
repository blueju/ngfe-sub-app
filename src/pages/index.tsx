import styles from './index.less';
import BpmnViewer from 'bpmn-js/lib/Modeler';

export default function IndexPage() {
  let bpmnViewer = new BpmnViewer({
    container: document.getElementById('canvas'),
  });
  console.log('bpmnViewer');
  console.log(bpmnViewer);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
