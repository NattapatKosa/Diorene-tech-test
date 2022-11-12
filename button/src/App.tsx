import { Button } from './component/Button';
import { ReactComponent as ForwardIcon} from './public/Forward.svg' ;
import './App.css';

function App() {
  return (
    <div>
      <h3>Large</h3>
      <section>
      <div className="row">
        <div className="col">
          <Button isLoading={false} >Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'secondary'}>Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'text'}>Button</Button>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Button isLoading={true}></Button>
        </div>
        <div className="col">
          <Button isLoading={true} variant={'secondary'}></Button>
        </div>
        <div className="col">
          <Button isLoading={true} variant={'text'}></Button>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Button isLoading={false}  disabled >Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'secondary'}  disabled>Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'text'} disabled>Button</Button>
        </div>
      </div>
      </section>
      <h3>Medium</h3>
      <section>
      <div className="row">
        <div className="col">
          <Button isLoading={false} size = {'medium'}>Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'secondary'} size = {'medium'}>Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'text'} size = {'medium'}>Button</Button>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Button isLoading={true} size = {'medium'}></Button>
        </div>
        <div className="col">
          <Button isLoading={true} variant={'secondary'} size = {'medium'}></Button>
        </div>
        <div className="col">
          <Button isLoading={true} variant={'text'} size = {'medium'}></Button>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Button isLoading={false} size = {'medium'}  disabled >Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'secondary'} size = {'medium'} disabled>Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'text'} size = {'medium'} disabled>Button</Button>
        </div>
      </div>
      </section>
      <h3>Small</h3>
      <section>
      <div className="row">
        <div className="col">
          <Button isLoading={false} size = {'small'}>Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'secondary'} size = {'small'}>Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'text'} size = {'small'}>Button</Button>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Button isLoading={true} size = {'small'}></Button>
        </div>
        <div className="col">
          <Button isLoading={true} variant={'secondary'} size = {'small'}></Button>
        </div>
        <div className="col">
          <Button isLoading={true} variant={'text'} size = {'small'}></Button>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Button isLoading={false} size = {'small'}  disabled >Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'secondary'} size = {'small'} disabled>Button</Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'text'} size = {'small'} disabled>Button</Button>
        </div>
      </div>
      </section>
      <h3>Icon</h3>
      <section>
      <div className="row">
        <div className="col">
          <Button isLoading={false} isIcon ={true}><ForwardIcon/></Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'secondary'} isIcon = {true}><ForwardIcon/></Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button isLoading={true} isIcon ={true}></Button>
        </div>
        <div className="col">
          <Button isLoading={true} variant={'secondary'} isIcon = {true}></Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button isLoading={false} isIcon ={true} disabled><ForwardIcon/></Button>
        </div>
        <div className="col">
          <Button isLoading={false} variant={'secondary'} isIcon = {true} disabled><ForwardIcon/></Button>
        </div>
      </div>

      </section>
      
    </div>
    

  );
}

export default App;
