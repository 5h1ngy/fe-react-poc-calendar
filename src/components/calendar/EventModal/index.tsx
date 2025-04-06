import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
  ModalOverlay, 
  ModalContainer, 
  ModalHeader, 
  ModalBody, 
  FormGroup, 
  FormRow, 
  ModalFooter,
  ActionButtons,
  ColorOptions,
  ColorOption,
  DurationSelector,
  ErrorMessage
} from './styles';
import Button from '@/components/ui/Button';
import { FiX, FiTrash2, FiCheck, FiCalendar, FiClock, FiTag } from 'react-icons/fi';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { addEvent, updateEvent, deleteEvent, CalendarEvent } from '@/store/slices/calendarSlice';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface EventModalProps {
  event?: CalendarEvent;
  initialDate?: moment.Moment;
  onClose: () => void;
}

const EVENT_COLORS = [
  '#1890ff', // blue
  '#52c41a', // green
  '#fa8c16', // orange
  '#f5222d', // red
  '#722ed1', // purple
  '#eb2f96', // pink
  '#faad14', // yellow
];

// Schema di validazione Zod per l'evento
const eventSchema = z.object({
  title: z.string().min(1, { message: 'Il titolo è obbligatorio' }),
  description: z.string().optional(),
  date: z.string().refine(val => moment(val, 'YYYY-MM-DD', true).isValid(), {
    message: 'Data non valida',
  }),
  time: z.string().refine(val => moment(val, 'HH:mm', true).isValid(), {
    message: 'Orario non valido',
  }),
  duration: z.number().min(5, { message: 'La durata minima è di 5 minuti' }),
  color: z.string().refine(val => EVENT_COLORS.includes(val), {
    message: 'Colore non valido',
  }),
});

type EventFormValues = z.infer<typeof eventSchema>;

const EventModal: React.FC<EventModalProps> = ({ event, initialDate, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  // Configurazione di react-hook-form con zod
  const { 
    control, 
    register, 
    handleSubmit, 
    setValue,
    watch,
    formState: { errors } 
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: event?.title || '',
      description: event?.description || '',
      date: event ? moment(event.date).format('YYYY-MM-DD') : initialDate ? initialDate.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'),
      time: event ? moment(event.date).format('HH:mm') : initialDate ? initialDate.format('HH:mm') : moment().format('HH:mm'),
      duration: event?.duration || 30,
      color: event?.color || EVENT_COLORS[0],
    },
  });
  
  // Per aggiornare il colore osservato
  const watchedColor = watch('color');
  
  const onSubmit = (data: EventFormValues) => {
    const eventData = {
      title: data.title,
      description: data.description || '',
      date: moment(`${data.date} ${data.time}`).format(),
      duration: data.duration,
      color: data.color,
    };
    
    if (event) {
      dispatch(updateEvent({
        ...eventData,
        id: event.id,
      }));
    } else {
      dispatch(addEvent(eventData));
    }
    
    onClose();
  };
  
  const handleDelete = () => {
    if (event) {
      if (window.confirm(t('calendar.confirmDelete'))) {
        dispatch(deleteEvent(event.id));
        onClose();
      }
    }
  };
  
  const handleColorSelect = (selectedColor: string) => {
    setValue('color', selectedColor);
  };
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContainer>
        <ModalHeader>
          <h2>{event ? t('calendar.editEvent') : t('calendar.addEvent')}</h2>
          <button onClick={onClose} aria-label={t('common.close')}>
            <FiX />
          </button>
        </ModalHeader>
        
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} id="event-form">
            <FormGroup>
              <label htmlFor="title">
                <FiTag /> {t('calendar.title')}
              </label>
              <input 
                id="title"
                {...register('title')}
                placeholder={t('calendar.titlePlaceholder')}
                autoFocus
              />
              {errors.title && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="description">{t('calendar.description')}</label>
              <textarea 
                id="description"
                {...register('description')}
                placeholder={t('calendar.descriptionPlaceholder')}
              />
            </FormGroup>
            
            <FormRow>
              <FormGroup>
                <label htmlFor="date">
                  <FiCalendar /> {t('calendar.date')}
                </label>
                <input 
                  id="date"
                  type="date" 
                  {...register('date')}
                />
                {errors.date && (
                  <ErrorMessage>{errors.date.message}</ErrorMessage>
                )}
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="time">
                  <FiClock /> {t('calendar.time')}
                </label>
                <input 
                  id="time"
                  type="time" 
                  {...register('time')}
                />
                {errors.time && (
                  <ErrorMessage>{errors.time.message}</ErrorMessage>
                )}
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <label htmlFor="duration">{t('calendar.duration')}</label>
              <DurationSelector>
                <Controller 
                  name="duration"
                  control={control}
                  render={({ field }) => (
                    <input 
                      id="duration"
                      type="number" 
                      min="5" 
                      step="5"
                      {...field}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (!isNaN(value) && value > 0) {
                          field.onChange(value);
                        }
                      }}
                    />
                  )}
                />
                <span>{t('calendar.minutes')}</span>
              </DurationSelector>
              {errors.duration && (
                <ErrorMessage>{errors.duration.message}</ErrorMessage>
              )}
            </FormGroup>
            
            <FormGroup>
              <label>{t('calendar.color')}</label>
              <ColorOptions>
                {EVENT_COLORS.map((eventColor) => (
                  <ColorOption 
                    key={eventColor}
                    $color={eventColor}
                    $selected={watchedColor === eventColor}
                    onClick={() => handleColorSelect(eventColor)}
                    aria-label={`${t('calendar.selectColor')} ${eventColor}`}
                    type="button"
                  />
                ))}
              </ColorOptions>
            </FormGroup>
          </form>
        </ModalBody>
        
        <ModalFooter>
          {event && (
            <Button 
              onClick={handleDelete} 
              variant="primary" 
              icon={<FiTrash2 />}
            >
              {t('calendar.delete')}
            </Button>
          )}
          
          <ActionButtons>
            <Button onClick={onClose} variant="secondary">
              {t('common.cancel')}
            </Button>
            <Button 
              type="submit"
              form="event-form" 
              variant="primary"
              icon={<FiCheck />}
            >
              {t('common.save')}
            </Button>
          </ActionButtons>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EventModal;
