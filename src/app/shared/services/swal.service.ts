import { Injectable } from '@angular/core';

import Swal, { SweetAlertResult } from 'sweetalert2';
import { $ } from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class SwalService {
    public showRemoveConfirmation(elementName?): Promise<SweetAlertResult> {
        elementName? elementName = `"${elementName}"` : elementName = "";
        return new Promise((resolve, reject)=>{
          Swal.fire({
            titleText : `عفوا 
            أنت لست مشترك  `,
            text: " تسجيل الدخول - انشاء حساب",
            icon: 'warning',
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonColor: '#1a5356',
            cancelButtonText: 'أغلاق',
          }).then((result) => {
            resolve(result)
          })
        })
    }
    


    public showRemoveConfirmations(elementName?): Promise<SweetAlertResult> {
      elementName? elementName = `"${elementName}"` : elementName = "";

      return new Promise((resolve, reject)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: ' Incorrect Email Or Password',
          showConfirmButton: false,
          timer: 2200,
         background:'#eb4d4b',
            footer: ' '

       
            }).then((result) => {
              resolve(result)
            });
      })

      
  }
    watched(title :string){
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: title,
            showConfirmButton: false,
            timer: 1500
          })
    }
    confirm(text :string){
        Swal.fire({
            icon: 'success',
            position: 'center',
            title: 'Attend',
            html: text,
            //  footer: '<a href>Why do ?</a>'
          })
    }
    NotifierError(text :string){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'حدث خطا ...',
            text:  text ,
            showConfirmButton: false,
            timer: 2200,
           background:'#eb4d4b',
              footer: ' '


                 

          })
    }
    NotifierEvent(title: string ,text :string){
        Swal.fire({
            position: 'bottom-end',
            title: title,
            text:text,
            showConfirmButton: true,
            allowOutsideClick : false,
            confirmButtonText:'تم',
            // background:'#e0fbfc',
            showClass: {
                popup: 'animated bounceIn fast'
              },
              hideClass: {
                popup: 'animated fadeOutLeft slow'
              }
          })
    }
 
}