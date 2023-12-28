var msgCtrl = (function(){

	"use strict";

	var config =
	{
		confirm :
		{
			ins : {
				  kr : "�깅줉�섏떆寃좎뒿�덇퉴?"
				, en: ""
				, cn: ""
			}
			,upd : {
				  kr : "�섏젙�섏떆寃좎뒿�덇퉴?"
				, en: ""
				, cn: ""
			}
			,del : {
				 kr : "��젣�섏떆寃좎뒿�덇퉴?"
				, en: ""
				, cn: ""
			}
			,sve : {
				  kr : "���ν븯�쒓쿋�듬땲源�?"
				, en: ""
				, cn: ""
			}
			,apl : {
				  kr : "�곸슜�섏떆寃좎뒿�덇퉴?"
				, en: ""
				, cn: ""
			}
			,cncl : {
				  kr : "痍⑥냼�섏떆寃좎뒿�덇퉴?\n�낅젰�� �뺣낫�� ��젣�섏뼱吏묐땲��."
				, en: ""
				, cn: ""
			}
			,rprt : {
				  kr : "�묒닔�섏떆寃좎뒿�덇퉴?"
				, en: ""
				, cn: ""
			}
		},
		success :
		{
			 ins : {
				   kr : "�깅줉�섏뿀�듬땲��."
				 , en: ""
				 , cn: ""
			 }
			,upd : {
				  kr :"�섏젙�섏뿀�듬땲��."
				, en: ""
				, cn: ""
			}
			,sve : {
				  kr :"���λ릺�덉뒿�덈떎."
				, en: ""
				, cn: ""
			}
			,apl : {
				  kr :"�곸슜�섏뿀�듬땲��."
				, en: ""
				, cn: ""
			}
			,rprt : {
				  kr : "�묒닔媛� �꾨즺�섏뿀�듬땲��."
				, en: ""
				, cn: ""
			}
		},
		fail :
		{
			act : {
				  kr :"臾몄젣媛� 諛쒖깮�섏뿬 吏꾪뻾�� 以묐떒�⑸땲��. �좎떆 �� �ㅼ떆 �쒕룄 諛붾엻�덈떎."
				, en: ""
				, cn: ""
			}
			,rprt : {
				 kr : "�묒닔媛� �ㅽ뙣�섏뿀�듬땲��."
				, en: ""
				, cn: ""
			}
			,rprt_id : {
				 kr : "�숈씪�� ID媛� 議댁옱�⑸땲��."
				, en: ""
				, cn: ""
			}
			,rprt_addr : {
				kr : "�곸꽭二쇱냼瑜� �낅젰�섏꽭��."
				, en: ""
				, cn: ""
			}
			,login : {
				kr : "�쇱튂�섎뒗 �뺣낫媛� �놁뒿�덈떎. \n�ㅼ떆 �� 踰� �뺤씤�댁＜�몄슂."
				, en: ""
				, cn: ""
			}
			,file:{
				extn: {
					  kr : "�깅줉媛��ν븳 �뺤옣�먭� �꾨떃�덈떎."
					, en: ""
					, cn: ""
				}
				,size: {
					kr : "泥⑤��뚯씪�� 理쒕� 100M源뚯�留� �깅줉媛��ν빀�덈떎."
					, en: ""
					, cn: ""
				}
				,no_size:{
					kr : "鍮꾩뼱�덈뒗 �뚯씪�� �깅줉�� �� �놁뒿�덈떎."
					, en: ""
					, cn: ""
				}
				,length: {
					  kr : "泥⑤��섎뒗 �뚯씪紐낆쓽 湲몄씠�� 20�먮줈 �쒗븳�⑸땲��."
					, en: ""
					, cn: ""
				}
			}
			,tot_srch:{
				length:{
					  kr: "寃��됱� 2�� �댁긽遺��� 媛��ν빀�덈떎."
					, en: "Search keyword has to be more than one character."
					, cn: "�쒐뇨��2弱뷰빳訝듿갚��빳��"
				}
			}
			,ec_cntnt:{
				length:{
					  kr: "�댁슜�� 1000�먮�珥덇낵�섏뿬 �깅줉�� 遺덇��⑸땲��.\n�섏젙 �� �깅줉�� 二쇱꽭��."
					, en: ""
					, cn: ""
				}
			}
		}
		, validate:{
			report:{
				agree:{
					  kr: "媛쒖씤�뺣낫 �섏쭛 쨌 �댁슜 �숈쓽�� �숈쓽�섏꽭��."
					, en: ""
					, cn: ""
				},
				not_agree:{
					  kr: "�꾩닔��ぉ�� �숈쓽�섏��딆쓣 寃쎌슦 �묒닔媛� 遺덇��⑸땲��."
					, en: ""
					, cn: ""
				}
			}
		}
	};
	//�몄뼱
	var get_message = function(msgCode){
		var lnggCd = $("body").data("lnggCd");
		if(lnggCd == undefined || lnggCd == ""){
			lnggCd = "kr";
		}
		return eval("config." + msgCode + "." + lnggCd);
	};

	return {
		getMsg : get_message
	}
}());