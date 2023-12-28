var cmmCtrl = (function(){

	"use strict";

	var fn_replace_null = function(val, chgStr)
	{
		if (val == undefined || val == null || val == "")
		{
			return chgStr;
		}
		else
		{
			return val;
		}
	};

    /* Ajax Normal */
    var fn_ajax = function(callbackAjax, url, dataType, loading, sync, method)
    {
        if (typeof dataType == "undefined") {
            dataType = "json";
        }

        if (typeof sync == "undefined") {
            sync = true;
        }

		if (typeof method == "undefined") {
			method = "post";
		}

        jQuery.ajax({
            url : url,
            type : method,
            timeout: 30000,
            dataType : dataType,
            async: sync,
            cache : false,
            beforeSend : function(){
                if (loading) {
                    jQuery(".loadingbar").stop().fadeIn(200);
                }
            },
            success : function(data, status, xhr){
				if(data.errors != null){
					fn_ajax_error(data, status, xhr);
				}
				else
				{
					if (callbackAjax) {
						callbackAjax(data);
					}
				}
            },
            error : function(data, status, xhr){
            	fn_ajax_error(data, status, xhr);
            },
            complete : function(){
                if (loading) {
                    jQuery(".loadingbar").stop().fadeOut(200);
                }
            }
        });
    };

    /* Ajax Form Data */
    var fn_ajax_data = function(callbackAjax, url, formObj, formActionType, dataRespType, loading, sync)
    {
		//�� �꾩넚 ����
    	if (typeof formActionType == "undefined") {
			formActionType = "POST";
        }
		//鍮꾨룞湲� �щ�
        if (typeof sync == "undefined") {
            sync = true;
        }
		//application header json
		if (typeof dataRespType == "undefined") {
			dataRespType = "json";
		}
		//�곕뵒�� 諛곗뿴 泥섎━
        if (formObj.data("submitFlag") != "Y") {
        	jQuery.ajax({
                url : url,
                type : formActionType,
                timeout: 30000,
                data : formObj.serializeArray(),
                dataType : dataRespType,
                async: sync,
                cache : false,
                beforeSend : function(){
                	formObj.data("submitFlag", "Y");
                	if (loading) {
                        $(".loadingbar").stop().fadeIn(100);
                    }
                },
                success : function(data, status, xhr){
					//鍮꾨룞湲곗씪�� errors 泥섎━
					if(data.errors != null){
						if(typeof data.statusCode == "undefined"){
							formObj.data("submitFlag", "N");
						}
						fn_ajax_error(data, status, xhr);
					}
					else
					{
						formObj.data("submitFlag", "N");
						if (callbackAjax) {
							callbackAjax(data);
						}
					}
                },
                error : function(data, status, xhr){
                	formObj.data("submitFlag", "N");
                	fn_ajax_error(data, status, xhr);
                },
                complete : function(){
                    if (loading) {
						$(".loadingbar").stop().fadeOut(100);
                    }
                }
            });
		}
    };

	//由ъ뒪�� 議고쉶 data 媛��몄삤湲�
	var fn_list_frm_set_data = function(formObj){
		var array = new Array();
		formObj.find("input:text, input:checkbox, select").each(function(){
			if($(this).data("name") != undefined)
			{
				//��젣
				formObj.find("input[type=hidden][name="+$(this).data("name")+"]").remove();
			}
		});
		formObj.find("input:text, input:checkbox, select").each(function(){
			if($(this).data("name") != undefined)
			{
				var inputTag = "";
				var tagType = $(this).attr("type");
				if(tagType == "checkbox")
				{
					if( $(this).is(":checked"))
					{
						inputTag = $("<input />", {
							type : "hidden",
							class : "form-notRequired notRequired",
							name : $(this).data("name"),
							value : $(this).val()
						});
						formObj.append(inputTag);
					}
				}
				else
				{
					inputTag = $("<input />", {
						type : "hidden",
						class : "form-notRequired notRequired",
						name : $(this).data("name"),
						value : $(this).val()
					});
					formObj.append(inputTag);
				}
			}
		})
	}
	/* 由ъ뒪�� 議고쉶 Ajax Form Data */
	var fn_list_ajax_data = function(callbackAjax, url, formObj, formActionType, dataRespType, loading, sync)
	{
		//�� �꾩넚 ����
		if (typeof formActionType == "undefined") {
			formActionType = "POST";
		}
		//鍮꾨룞湲� �щ�
		if (typeof sync == "undefined") {
			sync = true;
		}
		//application header json
		if (typeof dataRespType == "undefined") {
			dataRespType = "json";
		}
		//�곕뵒�� 諛곗뿴 泥섎━
		if (formObj.data("submitFlag") != "Y") {
			jQuery.ajax({
				url : url,
				type : formActionType,
				timeout: 30000,
				data : formObj.serializeArray(),
				dataType : dataRespType,
				async: sync,
				cache : false,
				beforeSend : function(){
					formObj.data("submitFlag", "Y");
					if (loading) {
						$(".loadingbar").stop().fadeIn(100);
					}
				},
				success : function(data, status, xhr){
					//鍮꾨룞湲곗씪�� errors 泥섎━
					if(data.errors != null){
						if(typeof data.statusCode == "undefined"){
							formObj.data("submitFlag", "N");
						}
						fn_ajax_error(data, status, xhr);
					}
					else
					{
						formObj.data("submitFlag", "N");
						if (callbackAjax) {
							callbackAjax(data);
						}
					}
				},
				error : function(data, status, xhr){
					formObj.data("submitFlag", "N");
					fn_ajax_error(data, status, xhr);
				},
				complete : function(){
					if (loading) {
						$(".loadingbar").stop().fadeOut(100);
					}
				}
			});
		}
	};

    /* Ajax Param Data */
    var fn_ajax_param_data = function(callbackAjax, url, paramData, dataType, loading, sync, actionType)
    {
    	if (typeof dataType == "undefined") {
            dataType = "json";
        }

        if (typeof sync == "undefined") {
            sync = true;
        }

		if(typeof actionType == "undefined"){
			actionType = "post";
		}

        jQuery.ajax({
            url : url,
            type : actionType,
            timeout: 300000,
            data : paramData,
            dataType : dataType,
            async: sync,
            cache : false,
            beforeSend : function() {
                if (loading) {
					$(".loadingbar").stop().fadeIn(100);
                }
            },
            success : function(data, status, xhr) {
				if(data.errors != null){
					fn_ajax_error(data, status, xhr);
				}
				else
				{
					if (callbackAjax) {
						callbackAjax(data);
					}
				}
            },
            error : function(data, status, xhr) {
            	fn_ajax_error(data, status, xhr);
            },
            complete : function() {
                if (loading) {
					$(".loadingbar").stop().fadeOut(100);
                }
            }
        });
    };

	/* Ajax File Data */
	var fn_ajax_file_data = function(callbackAjax, url, formObj, dataType, loading, sync)
	{
		if (typeof dataType == "undefined") {
			dataType = "json";
		}

		if (typeof sync == "undefined") {
			sync = true;
		}
		if (formObj.data("submitFlag") != "Y") {
			jQuery.ajax({
				url : url,
				type : "POST",
				enctype: 'multipart/form-data',
				timeout: 30000,
				data : new FormData(formObj[0]),
				dataType : dataType,
				async: sync,
				cache : false,
				contentType: false,
				processData: false,
				beforeSend : function() {
					formObj.data("submitFlag", "Y");

					if (loading) {
						$(".loadingbar").stop().fadeIn(100);
					}
				},
				success : function(data, status, xhr) {
					formObj.data("submitFlag", "N");

					if (callbackAjax) {
						callbackAjax(data);
					}
				},
				error : function(data, status, xhr) {
					formObj.data("submitFlag", "N");

					fn_ajax_error(data, status, xhr);
				},
				complete : function() {
					if (loading) {
						$(".loadingbar").stop().fadeOut(100);
					}
				}
			});
		}
	};

    /* Ajax Error */
    var fn_ajax_error = function(data, status, xhr)
    {
    	var loginFlag = true, statusCode = data.status;
    	
    	if (statusCode == 401 || statusCode == 403 || statusCode == 406)
        {
        	alert(msgCtrl.getMsg("fail.http.status.C" + statusCode));

        	if (statusCode != 403)
        	{
        		loginFlag = false;
        	}
        }
		else if(status == "success" && data.respCd == "500"){
			// Valid �ㅽ뙣
			$.each(data.errors, function(index, resp){
				$("#"+resp.fieldNm).focus();
				var msg = "";
				if(resp.msg.indexOf("empty") > -1)
				{
					var title = $("#"+resp.fieldNm).attr("title");
					if(typeof title != "undefined")
					{
						msg = title + ((title.charAt(title.length - 1).charCodeAt(0) - 44032 ) % 28 ? "��" : "瑜�") + eval(resp.msg);
					}
				}
				else
				{
					msg = eval(resp.msg);
				}
				//var html = '<p style="color:red">'+msg+'</p>';
				//$("#"+resp.fieldNm).after(html);
				alert(msg);
				return false;
			});
		}
        else
       	{
       		alert(msgCtrl.getMsg("fail.act"));
		}       
        
    	if (!loginFlag)
    	{
    		location.href = "/mngwsercgateway/index.do";
    	}
    };

    /* Set Period */
    var fn_set_period = function(obj, periodGubun, trgtPeriod)
	{
		var isVaild = false;
		if (periodGubun && typeof trgtPeriod === "number")
		{
			var today = new Date($("body").data("curtDt"));
			var year  = today.getFullYear();
	    	var month = today.getMonth() + 1;
	    	var day   = today.getDate();

	    	var trgtDay;

	    	if (periodGubun == "y")
		    {
	    		var tempDay = new Date(year - trgtPeriod, month - 1, day);

		    	var trgtYear  = tempDay.getFullYear();
			    var trgtMonth = tempDay.getMonth() + 1;
		    	var trgtDay   = tempDay.getDate();

		    	if (trgtMonth < 10)
		    	{
		    		trgtMonth = "0" + trgtMonth;
		    	}

		    	if (trgtDay < 10)
		    	{
	    			trgtDay = "0" + trgtDay;
		    	}

		    	trgtDay = trgtYear + "-" + trgtMonth  + "-" + trgtDay;
	    	}
	    	else if (periodGubun == "m")
	    	{
	    		var tempDay = new Date(year, month - 1, 1);

	    		tempDay.setMonth(tempDay.getMonth() - (trgtPeriod - 1));
				tempDay.setDate(tempDay.getDate() - 1);

				var trgtYear  = tempDay.getFullYear();
		    	var trgtMonth = tempDay.getMonth() + 1;
		    	var trgtDay   = tempDay.getDate();

		    	if (trgtMonth < 10)
		    	{
		    		trgtMonth = "0" + trgtMonth;
		    	}

		    	if (day < trgtDay)
		    	{
		    		trgtDay = day;
		    	}

		    	if (trgtDay < 10)
		    	{
	    			trgtDay = "0" + trgtDay;
		    	}

		    	trgtDay = trgtYear + "-" + trgtMonth  + "-" + trgtDay;
	    	}
	    	else if (periodGubun == "d")
	    	{
	    		var tempDay = new Date(year, month - 1, day - trgtPeriod);

	    		var trgtYear  = tempDay.getFullYear();
		    	var trgtMonth = tempDay.getMonth() + 1;
		    	var trgtDay   = tempDay.getDate();

		    	if (trgtMonth < 10)
		    	{
		    		trgtMonth = "0" + trgtMonth;
		    	}

		    	if (trgtDay < 10)
		    	{
	    			trgtDay = "0" + trgtDay;
		    	}

		    	trgtDay = trgtYear + "-" + trgtMonth  + "-" + trgtDay;
	    	}

	    	if (trgtDay)
	    	{
	    		isVaild = true;
	    	}
		}
		
		var formObj   = obj ? jQuery(obj).closest("form") : jQuery("#frmSearch");
		var strtDtObj = formObj.find(".datetimepicker_strtDt");
		var endDtObj  = formObj.find(".datetimepicker_endDt");
		if (isVaild)
    	{
			strtDtObj.datetimepicker("setOptions", {  maxDate : new Date(today), value : trgtDay });
			endDtObj.datetimepicker("setOptions", { minDate : trgtDay, value : today });
    	}
		else
		{
			strtDtObj.focus();
			strtDtObj.datetimepicker("setOptions", {  maxDate : false  });
			strtDtObj.datetimepicker("reset").val("");
			
			endDtObj.datetimepicker("setOptions", { minDate : false });
			endDtObj.datetimepicker("reset").val("");
		}
    };


	/* Set Popup */
	var fn_set_popup = function(pUrl, pName, pSw, pSh)
	{
		//�ㅽ겕由곗쓽 �ш린
		var cw = screen.availWidth;
		var ch = screen.availHeight;
		var sw = pSw;
		var sh = pSh;
		var ml = (cw - sw) / 2;
		var mt = (ch - sh) / 2;

		window.open(pUrl, pName, "width="+sw+",height="+sh+",top="+mt+",left="+ml+",location=no,menubar=no,toolbar=no,scrollbars=yes,resizable=no,copyhistory=no");
	};

	/* Check Maxlength */
	var fn_check_maxlength = function(obj)
	{
		var maxLength = obj.maxLength;

		if (obj.value.length > maxLength)
		{
			obj.value = obj.value.slice(0, maxLength);
		}
	};

	/* Check Continuous String */
	var check_cont_string =  function(str, limit)
	{
		var o, d, p, n = 0, l = limit == null ? 4 : limit;

	    for (var i = 0; i < str.length; i++)
	    {
	        var c = str.charCodeAt(i);

	        if (i > 0 && (p = o - c) > -2 && p < 2 && (n = p == d ? n + 1 : 0) > l - 3)
	        {
	        	return false;
	        }

	        d = p, o = c;
	    }

	    return true;
	};

	//FORM�쒓렇�� �뚯씪 媛앹껜 珥덇린��
	var fn_input_file_init = function(fileObj){
		var agent = navigator.userAgent.toLowerCase();
		if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) )
		{
			fileObj.replaceWith(fileObj.clone(true));
		}
		else
		{
			fileObj.val("");
		}
	}

	//3�먮━留덈떎 , �ｊ린
	var fn_set_comma = function(num){
		if(num != null)
		{
			return num.replace(/[^-0-9]/g, "").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		}
		else
		{
			return num;
		}
	}

	
	// Back/forward cache(�ㅻ줈/�욎쑝濡� 媛�湲�) 泥댄겕
	window.onpageshow = function(event){
		history.scrollRestoration = "manual";
	    if (event.persisted)
	    {
			location.reload();
		}
	};

	/* �뚮씪誘명꽣 異붿텧 */
    jQuery.extend({
    	getXssVal : function(targetValue){
			var returnValue = targetValue;

			if (returnValue)
			{
				returnValue = returnValue.replace(/&amp;/g, "&");
				returnValue = returnValue.replace(/&lt;/g, "<");
				returnValue = returnValue.replace(/&gt;/g, ">");
				returnValue = returnValue.replace(/&#34;/g, "\"");
				returnValue = returnValue.replace(/&#37;/g, "%");
				returnValue = returnValue.replace(/&#39;/g, "\'");
			}

			return returnValue;
		},
        getURLParam : function(strParamName) {
            var strHref   = window.location.href;
            var cmpstring = strParamName + "=";
            var bFound    = false;
            var strReturn = "";

            if (strHref.indexOf("?") > -1)
            {
                var aQueryString = strHref.substr(strHref.indexOf("?") + 1).split("&");

                for (var iParam = 0, length = aQueryString.length; iParam < length; iParam++)
                {
                    if (aQueryString[iParam].substr(0, cmpstring.length) == cmpstring)
                    {
                        strReturn = aQueryString[iParam].split("=")[1];
                        bFound = true;
                        break;
                    }
                }
            }

            if (bFound == false)
            {
                return null;
            }

            return strReturn;
        },
        getURLParams: function(){
            return location.search
        }
    });

    /* clearForm */
	jQuery.fn.clearForm = function(){
		return this.each(function(){
			var type = this.type, tag = this.tagName.toLowerCase();

			if (tag === "form")
			{
				return jQuery(":input", this).clearForm();
		    }
			if (type === "text" || type === "password" || type === "hidden" || tag === "textarea")
			{
				this.value = "";
		    }
			else if (type === "checkbox" || type === "radio")
			{
				this.checked = false;
		    }
			else if (tag === "select")
			{
				this.selectedIndex = 0;
		    }
		});
	};

	/* form strPam */
    jQuery.fn.strPam = function(){
    	var formObj = this, tmpObj = { }, strPam = "";

    	$.each(formObj.serializeArray(), function(){
    		var $type = formObj.find("[name='" + this.name + "']").prop("type");

    		if (tmpObj[this.name])
         	{
    			if ($type == "checkbox")
    			{
    				tmpObj[this.name] = tmpObj[this.name] + "," + "|" + this.value + "|";
    			}
    			else
    			{
    				tmpObj[this.name] = tmpObj[this.name] + "," + this.value;
    			}
         	}
         	else
         	{
         		if ($type == "checkbox")
         		{
         			tmpObj[this.name] = "|" + this.value + "|";
         		}
         		else
         		{
         			tmpObj[this.name] = this.value;
         		}
         	}
    	});

    	$.each(Object.keys(tmpObj), function(){
    		if (strPam)
         	{
         		strPam += "&";
         	}

         	strPam += this + "=" + tmpObj[this];
    	});

    	return strPam;
    };

	//湲곕낯 �ㅽ뻾
	$(document).ready(function(){
		//釉뚮씪�곗� �ㅻ뒛留� �닿린
		$("#popBrowserTodayCheck").click(function(){
			if(window.location.protocol == "https:"){
				$.cookie("popBrowserTodayCheck", "Y", {expires:1, path:"/", secure:true});
			}else{
				$.cookie("popBrowserTodayCheck", "Y", {expires:1, path:"/"});
			}
		})

	});

	//�섏씠吏� 泥섎━
	var fn_paging = function(totCnt, $formObj, listFormId, pagingFormId){
// �섏씠吏� �명똿
		const pageRowSize	 = parseInt($formObj.find("input[name=listRowSize]").val()); // �� �섏씠吏��� 蹂댁뿬吏��� �곗씠�곗쓽 ��
		const pageButtonSize = parseInt($formObj.find("input[name=pageRowSize]").val()); // �� 踰덉뿉 蹂댁뿬吏� �섏씠吏� 踰꾪듉�� �� (���섏뿬�쇰쭔 ��)
		const totalCount = parseInt(totCnt); // �꾩껜 �곗씠�� ��
		const totalPage = parseInt((totalCount-1)/pageRowSize) + 1; // �꾩껜 �섏씠吏� ��

		let data = {
			pageRowSize: pageRowSize,
			pageButtonSize: pageButtonSize,

			totalCount: totalCount,
			totalPage: totalPage,

			now:0,
			prev:0,
			next:0,

			start: 0,
			end:0,
		};
		data.now = parseInt( $formObj.find("#pageIndex").val() );

		// this.totalCount = this.$root.totalCount;
		data.totalPage = Math.ceil(data.totalCount / data.pageRowSize);

		// data.prev = (data.now  > 1) ? data.now - 1 : null
		data.prev = (data.now  > 1) ? data.now - 1 : data.now
		// data.next = (data.totalPage !== data.now && data.totalPage != 0) ? data.now + 1 : null
		data.next = (data.totalPage !== data.now && data.totalPage != 0) ? data.now + 1 : data.now

		data.start =  (Math.ceil(data.now / data.pageButtonSize) - 1) * data.pageButtonSize + 1;
		data.end = ((data.start + data.pageButtonSize) > data.totalPage ? data.totalPage : (data.start + data.pageButtonSize - 1))

		var deviceType = $("body").data("deviceType");
		var template = "";

		// 紐⑤컮�� pc �섏씠吏� 遺꾧린泥섎━
		if("mbl" == deviceType){
			if(data.totalPage == data.now){
				$("#"+pagingFormId).css("display", "none");
			}else{
				$formObj.find("#pageIndex").val(data.next);
				$("#"+pagingFormId).css("display", "block");
			}
		}
		else{
			var button='';

			// 寃��됯껐怨� �놁쓣 ��, �섏씠吏� 1 泥섎━
			data.end = data.end == 0 ? 1 : data.end;
			data.totalPage = data.totalPage == 0 ? 1 : data.totalPage;

			for(var i = data.start; i <= data.end; i++){
				if(i == data.now){
					button += '<a href="javascript:" class="pageSet num active" value="'+ i +'" data-page="'+ i +'">' + i + '</a>';
				}else {
					button += '<a href="javascript:" class="pageSet num" value="' + i + '" data-page="'+ i +'">' + i + '</a>';
				}
			}

			// �섏씠吏� 踰꾪듉
			if(totalCount == 0) {
				template = '';
			}
			else {
				template =
					'<a href="javascript:" class="pageSet btn_page first" title="泥섏쓬�쇰줈 �대룞" value="1" data-page="1">&nbsp;</a>'+
					'<a href="javascript:" class="pageSet btn_page prev" title="�댁쟾�섏씠吏�濡� �대룞" value="' + data.prev + '" data-page="' + data.prev + '">&nbsp;</a>' +
					button +
					'<a href="javascript:" class="pageSet btn_page next" title="�ㅼ쓬�섏씠吏�濡� �대룞" value="' + data.next + '" data-page="' + data.next + '">&nbsp;</a>' +
					'<a href="javascript:" class="pageSet btn_page last" title="留덉�留됱쑝濡� �대룞" value="' + data.totalPage + '" data-page="' + data.totalPage + '">&nbsp;</a>';
			}
			// �붾㈃ 遺숈씠湲�
			$formObj.find("#"+pagingFormId).html(template);
		}

	}

	// �덉씠�댄뙘�� �몄텧
	var fn_show_layerpopup = function(id){
		$("#"+id).css("display", "block");
		popupResize();
		$("body").addClass("stop_scroll");
	}

	// �덉씠�댄뙘�� 誘몃끂異�
	var fn_hide_layerpopup = function(id){
		$("#"+id).css("display", "none");
		$("body").removeClass("stop_scroll");
	}

	// 硫붿씤 鍮꾩��� �곸긽 �쒓컙 諛� �꾨줈洹몃젅�ㅻ컮 �ㅼ젙
	var fn_set_main_video = function() {
		var progress = document.getElementById("progress");
		var mainVideo = document.getElementById("main_video");

		setInterval(function () {
			$('.time').text(fn_set_time_format(Math.round(mainVideo.currentTime)));
			progress.value = Math.round((mainVideo.currentTime / mainVideo.duration) * 100);
		});
	}

	// �곸긽 �쒓컙 �щ㎎ 蹂�寃�
	var fn_set_time_format = function(secTime) {
		var secNum = parseInt(secTime);
		var minutes = Math.floor(secNum / 60);
		var seconds = secNum - (minutes * 60);

		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		return minutes + ':' + seconds;
	}

    return {
    	nvl : fn_replace_null,
        bscAjax : fn_ajax,
        frmAjax : fn_ajax_data,
		listFrmAjax : fn_list_ajax_data,
        paramAjax : fn_ajax_param_data,
		fileFrmAjax : fn_ajax_file_data,
        errorAjax : fn_ajax_error,
        setPeriod: fn_set_period,
        setPopup : fn_set_popup,
        checkMaxlength : fn_check_maxlength,
        checkContString : check_cont_string,
		setFormData: fn_list_frm_set_data,
		inputFileInit: fn_input_file_init,
		listPaging : fn_paging,
		showLayerPopup : fn_show_layerpopup,
		hideLayerPopup : fn_hide_layerpopup,
		setComma : fn_set_comma,
		setMainVideo : fn_set_main_video,
		setTimeFormat : fn_set_time_format
    }
}());