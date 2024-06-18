import { FALSE } from './../../node_modules/sass/types/legacy/function.d';
/* eslint-disable */
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicShapeModel, ConnectorModel, DecoratorModel, DiagramComponent, HorizontalAlignment, IClickEventArgs, ImageElement, MarginModel, NodeConstraints, NodeModel, PointModel, PointPortModel, PortVisibility, ShapeStyleModel, SnapConstraints, SnapSettingsModel, StrokeStyleModel, VerticalAlignment } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'diagramas';
  @ViewChild("diagram") public diagram: DiagramComponent | any;
  @ViewChild("content") modalContent: TemplateRef<any> | any;
  public shape1?: ImageElement;
  public shape2?: ImageElement;
  public shape3?: ImageElement;
  public shape4?: ImageElement;
  public shape5?: ImageElement;
  public shape6?: ImageElement;
  public shape7?: ImageElement;
  public shape8?: ImageElement;
  public shape9?: ImageElement;
  public margin?: MarginModel;
  public offset?: PointModel;
  public verticalAlignment?: VerticalAlignment;
  public horizontalAlignment?: HorizontalAlignment;
  public nodeConstraints?: NodeConstraints;
  public nodes: any = [];
  public sourcePoint?: PointModel;
  public targetPoint?: PointModel;
  selectedOption = 0;
  offsetX = 0;
  public snapSettings: SnapSettingsModel = {
    // Display both Horizontal and Vertical gridlines
    constraints: SnapConstraints.None
  };

  public port: PointPortModel[] = [{
    id: 'port',
    offset: {
      x: 0,
      y: 0.5
    },
    visibility: PortVisibility.Hidden
  },
  {
    id: 'port3',
    offset: {
      x: 1,
      y: 0.5
    },
    visibility: PortVisibility.Hidden
  }]

  public port2: PointPortModel[] = [
    {
      id: 'port2',
      offset: {
        x: 0.5,
        y: 0
      },
      visibility: PortVisibility.Hidden
    },
    {
      id: 'port5',
      offset: {
        x: 0.5,
        y: 1
      },
      visibility: PortVisibility.Hidden
    }];

  public port4: PointPortModel[] = [
    {
      id: 'port4',
      offset: {
        x: 0.5,
        y: 0
      },
      visibility: PortVisibility.Hidden
    },
    {
      id: 'port12',
      offset: {
        x: 0.5,
        y: 1
      },
      visibility: PortVisibility.Hidden
    }];

  public port6: PointPortModel[] = [
    {
      id: 'port6',
      offset: {
        x: 0,
        y: 0.5
      },
      visibility: PortVisibility.Hidden
    },
    {
      id: 'port7',
      offset: {
        x: 1,
        y: 0.5
      },
      visibility: PortVisibility.Hidden
    }];

  public port8: PointPortModel[] = [
    {
      id: 'port8',
      offset: {
        x: 0,
        y: 0.5
      },
      visibility: PortVisibility.Hidden
    },
    {
      id: 'port9',
      offset: {
        x: 1,
        y: 0.5
      },
      visibility: PortVisibility.Hidden
    }];

    public port10: PointPortModel[] = [
      {
        id: 'port10',
        offset: {
          x: 0,
          y: 0.5
        },
        visibility: PortVisibility.Hidden
      },
      {
        id: 'port11',
        offset: {
          x: 0.5,
          y: 0
        },
        visibility: PortVisibility.Hidden
      }];

      constructor (
        private modalService: NgbModal)
      {

      }

  ngOnInit(): void {

    this.shape1 = { type: 'Image', source: '../assets/icons/1_notarial_1.svg', scale: 'None' } as unknown as ImageElement;
    this.shape2 = { type: 'Image', source: '../assets/icons/1_ingre_1.svg', scale: 'None' } as unknown as ImageElement;
    this.shape3 = { type: 'Image', source: '../assets/icons/1_cotejo_1.svg', scale: 'None' } as unknown as ImageElement;
    this.shape4 = { type: 'Image', source: '../assets/icons/1_fondos_1.svg', scale: 'None' } as unknown as ImageElement;
    this.shape5 = { type: 'Image', source: '../assets/icons/1_Post_1.svg', scale: 'None' } as unknown as ImageElement;
    this.shape6 = { type: 'Image', source: '../assets/icons/1_aval_1.svg', scale: 'None' } as unknown as ImageElement;
    this.shape7 = { type: 'Image', source: '../assets/icons/1_cierre_1.svg', scale: 'None' } as unknown as ImageElement;
    this.shape8 = { type: 'Image', source: '../assets/icons/1_mesa_1.svg', scale: 'None' } as unknown as ImageElement;
    this.shape9 = { type: 'Image', source: '../assets/icons/1_progra_1.svg', scale: 'None' } as unknown as ImageElement;

    this.margin = { top: 10 }
    this.horizontalAlignment = 'Center'
    this.verticalAlignment = 'Top'
    this.offset = { x: 0.5, y: 1 }
    // this.nodeConstraints = NodeConstraints.Default & ~NodeConstraints.Rotate & ~NodeConstraints.Drag &
    //   ~NodeConstraints.Resize & ~NodeConstraints.Delete & ~NodeConstraints.Tooltip;

    let el = document.getElementsByTagName('div');
    for (let i = 0; i < el.length; i++) {
      if (el[i].innerText == 'This application was built using a trial version of Syncfusion Essential Studio. To remove the license validation message permanently, a valid license key must be included. Claim your free account') {
        el[i].style.display = 'none';
      }
    }

  }

  public click(args: IClickEventArgs): void {
    // Obtains the mouse button clicked
    console.log(args.actualObject.nodes ? args.actualObject.nodes[0].id : '');
    let id = args.actualObject.nodes ? args.actualObject.nodes[0].id : '';

    this.modalService.open(this.modalContent, { ariaLabelledBy: 'modal-basic-title', centered: true, backdrop: false }).result.then(
			(result) => {
				console.log(result);
        // change image from node
          let i = this.diagram.nodes.findIndex((node: any) => node.id == id);
          let img = '';
          this.diagram.nodes[i].shape = { type: 'Image', source: '../assets/icons/' + id + '-' + result + '.svg'};
          (this.diagram as DiagramComponent).dataBind();
			},
			(reason) => {
				// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);

  }

  public getConnectorDefaults(obj: ConnectorModel): void {
    // Set Source Padding value
    // obj.sourcePadding = 20
    // Set Target Padding value
    // obj.targetPadding = 20
  }

  public created(args: Object): void {
    this.offsetX = this.diagram?.scrollSettings.viewPortWidth / 2;
    this.diagram?.fitToPage();
    for (let i = 0; i < this.diagram?.connectors.length; i++) {
      ((this.diagram as DiagramComponent).connectors[i].style as StrokeStyleModel).strokeColor = '#a4bec9';
      ((this.diagram as DiagramComponent).connectors[i].style as StrokeStyleModel).strokeColor = '#a4bec9';
      ((this.diagram as DiagramComponent).connectors[i].style as StrokeStyleModel).fill = '#a4bec9';
      ((this.diagram as DiagramComponent).connectors[i].style as StrokeStyleModel).strokeWidth = 5;
      ((this.diagram as DiagramComponent).connectors[i].targetDecorator as DecoratorModel).shape = 'None';
      (((this.diagram as DiagramComponent).connectors[i].targetDecorator as DecoratorModel).style as StrokeStyleModel).fill = '#a4bec9';
      (((this.diagram as DiagramComponent).connectors[i].targetDecorator as DecoratorModel).style as ShapeStyleModel).strokeColor = '#a4bec9';

      (this.diagram as DiagramComponent).dataBind();
    }


  }

  public getNodeDefaults(node: NodeModel | any): NodeModel {
    node.height = 120;
    node.width = 150;
    // node.HorizontalAlignment = 'Center';
    ((node as NodeModel).style as ShapeStyleModel).fill = 'none';
    ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'none';
    return node;
  }
}
