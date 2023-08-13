import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-kitchen-sink-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class TablesKitchenSinkEditComponent implements OnInit {
  public actionType:string;
  form2 = new FormGroup({});

  constructor(
    private toast: ToastrService,
    public dialogRef: MatDialogRef<TablesKitchenSinkEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.actionType = "";
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if(this.data.record){
      this.actionType = "Edit Data"
    } else{
      this.actionType = "Add Data"
    }
  }

  // Advanced Layout
  model2 = {};
  fields2: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-6',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            label: 'First Name',
            required: true,
          },
        },
        {
          className: 'col-sm-6',
          type: 'input',
          key: 'lastName',
          templateOptions: {
            label: 'Last Name',
            required: true,
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.firstName',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-6',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
          },
        },
        {
          className: 'col-sm-3',
          type: 'combobox',
          key: 'cityId',
          templateOptions: {
            label: 'City',
            options: [
              { id: 1, name: '北京' },
              { id: 2, name: '上海' },
              { id: 3, name: '广州' },
              { id: 4, name: '深圳' },
            ],
            labelProp: 'name',
            valueProp: 'id',
            required: true,
            description: 'This is a custom field type.',
          },
        },
        {
          className: 'col-sm-3',
          type: 'input',
          key: 'zip',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    },
    {
      type: 'textarea',
      key: 'otherInput',
      templateOptions: {
        label: 'Other Input',
      },
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      templateOptions: {
        label: 'Other Checkbox',
      },
      wrappers: ['div'],
    },
  ];


  submit2() {
    if (this.form2.valid) {
      this.showToast(this.model2);
    }
  }

  showToast(obj: any) {
    this.toast.success(JSON.stringify(obj));
  }
}
