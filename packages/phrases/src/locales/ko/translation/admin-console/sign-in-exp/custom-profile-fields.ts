const custom_profile_fields = {
  table: {
    add_button: '프로필 필드 추가',
    title: {
      field_label: '필드 라벨',
      type: '유형',
      user_data_key: '사용자 프로필 키',
    },
    placeholder: {
      title: '사용자 프로필 수집',
      description:
        '회원가입 시 추가적인 사용자 프로필 정보를 수집하기 위해 필드를 커스터마이즈하세요.',
    },
  },
  type: {
    Text: '텍스트',
    Number: '숫자',
    Date: '날짜',
    Checkbox: '체크박스 (부울)',
    Select: '드롭다운 (단일 선택)',
    Url: 'URL',
    Regex: '정규 표현식',
    Address: '주소 (구성)',
    Fullname: '전체 이름 (구성)',
  },
  modal: {
    title: '프로필 필드 추가',
    subtitle: '회원가입 시 추가적인 사용자 프로필 정보를 수집하기 위해 필드를 커스터마이즈하세요.',
    built_in_properties: '내장된 사용자 프로필 속성',
    custom_properties: '사용자 정의 속성',
    custom_data_field_name: '사용자 정의 데이터 필드 이름',
    custom_data_field_input_placeholder:
      '사용자 정의 데이터 필드 이름을 입력하세요, 예: `myFavoriteFieldName`',
    custom_field: {
      title: '사용자 정의 데이터 필드',
      description:
        '애플리케이션의 고유한 요구 사항을 충족하기 위해 정의할 수 있는 추가적인 사용자 속성입니다.',
    },
    type_required: '속성 유형을 선택해주세요',
    create_button: '프로필 필드 생성',
  },
  details: {
    page_title: '프로필 필드 상세 정보',
    back_to_sie: '로그인 경험으로 돌아가기',
    enter_field_name: '프로필 필드 이름을 입력하세요',
    delete_description: '이 작업은 취소할 수 없습니다. 정말로 이 프로필 필드를 삭제하시겠습니까?',
    field_deleted: '프로필 필드 {{name}}이(가) 성공적으로 삭제되었습니다.',
    key: '사용자 데이터 키',
    field_name: '필드 이름',
    field_type: '필드 유형',
    settings: '설정',
    settings_description:
      '회원가입 시 추가적인 사용자 프로필 정보를 수집하기 위해 필드를 커스터마이즈하세요.',
    address_format: '주소 형식',
    single_line_address: '한 줄 주소',
    multi_line_address: '여러 줄 주소 (예: 거리, 도시, 주, 우편번호, 국가)',
    composition_parts: '구성 요소',
    composition_parts_tip: '복잡한 필드를 구성할 부분을 선택하세요.',
    label: '표시 라벨',
    label_placeholder: '라벨',
    label_tip: '현지화가 필요하신가요? <a>로그인 경험 > 콘텐츠</a>에서 언어를 추가하세요',
    placeholder: '표시 플레이스홀더',
    placeholder_placeholder: '플레이스홀더',
    description: '표시 설명',
    description_placeholder: '설명',
    options: '옵션',
    options_tip:
      '각 옵션을 새 줄에 입력하세요. 키와 값을 구분하기 위해 콜론을 사용하세요, 예: `key:value`',
    options_placeholder: 'value1:label1\nvalue2:label2\nvalue3:label3',
    regex: '정규 표현식',
    regex_tip: '입력을 검증하기 위한 정규 표현식을 정의하세요.',
    regex_placeholder: '^[a-zA-Z0-9]+$',
    date_format: '날짜 형식',
    date_format_us: '미국 (MM/dd/yyyy)',
    date_format_uk: '영국 및 유럽 (dd/MM/yyyy)',
    date_format_iso: '국제 표준 (yyyy-MM-dd)',
    custom_date_format: '사용자 정의 날짜 형식',
    custom_date_format_placeholder: '사용자 정의 날짜 형식을 입력하세요. 예: "MM-dd-yyyy"',
    custom_date_format_tip: '유효한 포맷 토큰은 <a>date-fns</a> 문서를 참조하세요.',
    input_length: '입력 길이',
    value_range: '값 범위',
    min: '최소',
    max: '최대',
    required: '필수',
    required_description:
      '활성화하면 사용자가 이 필드를 반드시 입력해야 합니다. 비활성화하면 이 필드는 선택 사항입니다.',
  },
};

export default Object.freeze(custom_profile_fields);
